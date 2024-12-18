import { parseArrayBuffer } from 'midi-json-parser';
import Track from './track';
import { IMidiSetTempoEvent, IMidiNoteOnEvent, IMidiProgramChangeEvent, IMidiControlChangeEvent } from 'midi-json-parser-worker';
import * as factorio from './factorio';
import { equalizeBP } from './equalizer';
import musicBoxBPString from './music-box.bp';

type BluePrint = factorio.BluePrint;

const musicBoxBPTemplate = factorio.decodeBP(musicBoxBPString);

export async function midiToBP(data: ArrayBuffer, playbackMode: string = 'local', volume: number = 1.0): Promise<string> {
   const musicBoxBP = factorio.filterBP(
      musicBoxBPTemplate,
      ent => ['key', 'controller', 'controller-misc'].includes(ent.player_description)
   );

   let maxEntityID = 0;
   let offsetX = 0;

   const [keyCell, _] = factorio.genCell([...Array(2000)].map((_, i) => i+1));
   const keyEnt = factorio.getEntityByDescription(musicBoxBP, 'key');
   keyEnt.control_behavior = keyCell;

   let lastKey = keyEnt;
   let lastControl = factorio.getEntityByDescription(musicBoxBP, 'controller');

   const midi = await parseArrayBuffer(data);
   let tempo = 500000;
   const division = midi.division;

   // find tempo, assume single tempo for now
   for(let midiTrack of midi.tracks) {
      const tempoTrack = midiTrack.find(event => 'setTempo' in event) as IMidiSetTempoEvent | null;
      if(tempoTrack != null) {
         tempo = tempoTrack.setTempo.microsecondsPerQuarter;
      }
   }

   for(let [i, midiTrack] of midi.tracks.entries()) {
      const track = new Track(tempo, midi.division);
      for(let event of midiTrack) {
         track.updateDelta(event.delta)

         if('noteOn' in event) {
            const note = (event as IMidiNoteOnEvent).noteOn.noteNumber;
            track.pushNote(note);
         }

         if('programChange' in event) {
            const program = (event as IMidiProgramChangeEvent).programChange.programNumber;
            track.setMidiInstrument(program, event.channel as number);
         }

         if('controlChange' in event) {
            const {type, value} = (event as IMidiControlChangeEvent).controlChange;
            if(type === 7) {
               track.setMidiVolume(value);
            }
         }
      }

      for(const data of track.data()) {
         const trackBP = factorio.filterBP(
            musicBoxBPTemplate,
            ent => ['rom', 'key-port', 'control-port', 'player'].includes(ent.player_description) || ent.name === 'programmable-speaker'
         );

         const [cell, signalCount] = factorio.genCell(data);
         console.assert(data.length <= signalCount, `too many notes in a track ${data.length} / ${signalCount}`);

         const cellEnt = factorio.getEntityByDescription(trackBP, 'rom');
         cellEnt.control_behavior = cell;

         const speaker = trackBP.blueprint.entities.find((ent: BluePrint) => ent.name === 'programmable-speaker');
         speaker.control_behavior.circuit_parameters.instrument_id = track.getInstrumentID();
         speaker.parameters.playback_volume = track.getVolume();
         speaker.parameters.playback_mode = playbackMode;

         let maxTrackId = 0;
         for(const ent of trackBP.blueprint.entities) {
            maxTrackId = Math.max(maxTrackId, ent.entity_number);
            ent.entity_number += maxEntityID;
            ent.position.x += offsetX;
            musicBoxBP.blueprint.entities.push(ent);
         }

         for(const wire of trackBP.blueprint.wires) {
            wire[0] += maxEntityID;
            wire[2] += maxEntityID;
            musicBoxBP.blueprint.wires.push(wire);
         }

         const keyPort = factorio.getEntityByDescription(trackBP, 'key-port');
         const controlPort = factorio.getEntityByDescription(trackBP, 'control-port');
         musicBoxBP.blueprint.wires.push(
            [lastKey.entity_number, 1, keyPort.entity_number, 1],
            [lastControl.entity_number, 2, controlPort.entity_number, 2],
         );
         lastKey = keyPort;
         lastControl = controlPort;

         maxEntityID += maxTrackId;
         offsetX -= 2;
      }
   }

   equalizeBP(musicBoxBP, volume);

   return factorio.encodeBP(musicBoxBP);
}
