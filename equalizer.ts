import { Instrument } from './track';
import { BluePrint } from './factorio';

const VOLUME_FACTOR: {[instrument in Instrument]: number} = {
   [Instrument.Nothing]:       0.0,
   [Instrument.Piano]:         1.0,
   [Instrument.DrumKit]:       0.5,
   [Instrument.Bass]:          1.0,
   [Instrument.Lead]:          1.0,
   [Instrument.Sawtooth]:      1.0,
   [Instrument.Square]:        0.2,
   [Instrument.Celesta]:       1.0,
   [Instrument.Vibraphone]:    1.0,
   [Instrument.PluckedString]: 1.0,
   [Instrument.SteelDrum]:     1.0,
   [Instrument.WoodBlock]:     1.0,
   [Instrument.BassDrum]:      1.0,
};

export function equalizeBP(bp: BluePrint, volume: number) {
   const speakers = bp.blueprint.entities.filter((ent: BluePrint) => ent.name === 'programmable-speaker');
   let maxVolume = 0.0;
   for(const speaker of speakers) {
      const factor = VOLUME_FACTOR[speaker.control_behavior.circuit_parameters.instrument_id as Instrument];
      if(speaker.parameters.playback_volume === 0)
         speaker.parameters.playback_volume = 1.0;
      speaker.parameters.playback_volume *= factor;
      maxVolume = Math.max(maxVolume, speaker.parameters.playback_volume);
   }
   for(const speaker of speakers) {
      speaker.parameters.playback_volume *= volume / maxVolume;
   }
}
