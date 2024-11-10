import { parseArrayBuffer } from 'midi-json-parser';
import { IMidiSetTempoEvent, IMidiNoteOnEvent } from 'midi-json-parser-worker';
import * as factorio from './factorio';
import musicBoxBPString from './music-box.bp';

type BluePrint = factorio.BluePrint;

const musicBoxBPTemplate = factorio.decodeBP(musicBoxBPString);

const TICK_PER_US = 60 / 1000000;

const FACTORIO_NOTE_OFFSET = -28;
const FACTORIO_NOTE_MAX = 48;
/*
 * piano 48
 * bass 36
 * lead 36
 * saw 36
 * square 36
 * celesta 36
 * vibe 36
 * string 36
 * steall drum 36
 * drum 17
 */

export async function midiToBP(data: ArrayBuffer): Promise<string> {
   const maxEntityID = Math.max(...musicBoxBPTemplate.blueprint.entities.map((ent: BluePrint) => ent.entity_number)) + 1;
   const musicBoxBP = factorio.filterBP(
      musicBoxBPTemplate,
      ent => ['key', 'controller'].includes(ent.player_description)
   );

   const [keyCell, _] = factorio.genCell([...Array(2000)].map((_, i) => i+1));
   const keyEnt = factorio.getEntitiesByDescription(musicBoxBP, 'key')[0];
   keyEnt.control_behavior = keyCell;

   const midi = await parseArrayBuffer(data);
   let tempo = 500000;
   const division = midi.division;

   // find tempo, assume single tempo for now
   for(let track of midi.tracks) {
      const tempoTrack = track.find(event => 'setTempo' in event) as IMidiSetTempoEvent | null;
      if(tempoTrack != null) {
         tempo = tempoTrack.setTempo.microsecondsPerQuarter;
      }
   }

   for(let [i, track] of midi.tracks.entries()) {
      const notes: {delay: number, note: number}[] = [];
      let delta = 0;
      let noteShift = 0;
      for(let event of track) {
         delta += event.delta;
         if('noteOn' in event) {
            const delay = Math.round(delta * tempo / division * TICK_PER_US) - 3;
            if(delay <= 0) continue; // can we do something else when notes are too fast?

            const note = (event as IMidiNoteOnEvent).noteOn.noteNumber + FACTORIO_NOTE_OFFSET;
            while(note + noteShift > FACTORIO_NOTE_MAX) noteShift -= 12;
            while(note + noteShift < 1) noteShift += 12;

            if(delay > 0) {
               notes.push({
                  delay: delay,
                  note: note + noteShift,
               });
               delta = 0;
            }
         }
      }

      if(notes.length < 100) continue;
      const trackBP = generateTrack(notes);
      musicBoxBP.blueprint.entities.push(...trackBP.blueprint.entities);
      musicBoxBP.blueprint.wires.push(...trackBP.blueprint.wires);
      break;
   }

   return factorio.encodeBP(musicBoxBP);
}

function generateTrack(notes: { delay: number, note: number }[]): BluePrint {
   const trackBP = factorio.filterBP(
      musicBoxBPTemplate,
      ent => ['rom', 'port', 'player'].includes(ent.player_description) || ent.name === 'programmable-speaker'
   );

   let entityID = Math.max(...trackBP.blueprint.entities.map((ent: BluePrint) => ent.entity_number)) + 1;
   let lastCell = null;
   let lastAddr = null;
   let addrBase  = 0;

   let data = notes.map(({delay, note}) => delay << 8 | note);
   while(data.length > 0) {
      const [cell, signalCount] = factorio.genCell(data);

      let cellEnt = null;
      let addrEnt = null;

      if(lastCell == null || lastAddr == null) {
         for(let ent of factorio.getEntitiesByDescription(trackBP, 'rom')) {
            if(ent.name == 'constant-combinator') {
               cellEnt = ent;
            } else if(ent.name == 'decider-combinator') {
               addrEnt = ent;
            }
         }
      } else {
         cellEnt = structuredClone(lastCell);
         cellEnt.entity_number = entityID++;
         cellEnt.position.x = lastAddr.position.x;
         cellEnt.position.y = lastAddr.position.y - 1.5;

         addrEnt = structuredClone(lastAddr);
         addrEnt.entity_number = entityID++;
         addrEnt.position.x = lastCell.position.x;
         addrEnt.position.y = lastCell.position.y - 1.5;

         trackBP.blueprint.entities.push(cellEnt, addrEnt);
         trackBP.blueprint.wires.push(
            [lastAddr.entity_number, 1, addrEnt.entity_number, 1],
            [lastAddr.entity_number, 4, addrEnt.entity_number, 4],
            [cellEnt.entity_number,  2, addrEnt.entity_number, 2],
         );
      }

      cellEnt.control_behavior = cell;
      addrEnt.control_behavior.decider_conditions.conditions[1].constant = addrBase;
      addrEnt.control_behavior.decider_conditions.conditions[2].constant = addrBase + signalCount;

      lastAddr = addrEnt;
      lastCell = cellEnt;

      addrBase += signalCount;
      data = data.slice(signalCount);
   }

   return trackBP;
}

/*
Piano:
1 Acoustic Grand Piano
2 Bright Acoustic Piano
3 Electric Grand Piano
4 Honky-tonk Piano
5 Electric Piano 1
6 Electric Piano 2
7 Harpsichord
8 Clavinet

Chromatic Percussion:
9 Celesta
10 Glockenspiel
11 Music Box
12 Vibraphone
13 Marimba
14 Xylophone
15 Tubular Bells
16 Dulcimer

Organ:
17 Drawbar Organ
18 Percussive Organ
19 Rock Organ
20 Church Organ
21 Reed Organ
22 Accordion
23 Harmonica
24 Tango Accordion

Guitar:
25 Acoustic Guitar (nylon)
26 Acoustic Guitar (steel)
27 Electric Guitar (jazz)
28 Electric Guitar (clean)
29 Electric Guitar (muted)
30 Overdriven Guitar
31 Distortion Guitar
32 Guitar harmonics

Bass:
33 Acoustic Bass
34 Electric Bass (finger)
35 Electric Bass (pick)
36 Fretless Bass
37 Slap Bass 1
38 Slap Bass 2
39 Synth Bass 1
40 Synth Bass 2

Strings:
41 Violin
42 Viola
43 Cello
44 Contrabass
45 Tremolo Strings
46 Pizzicato Strings
47 Orchestral Harp
48 Timpani

Strings (continued):
49 String Ensemble 1
50 String Ensemble 2
51 Synth Strings 1
52 Synth Strings 2
53 Choir Aahs
54 Voice Oohs
55 Synth Voice
56 Orchestra Hit

Brass:
57 Trumpet
58 Trombone
59 Tuba
60 Muted Trumpet
61 French Horn
62 Brass Section
63 Synth Brass 1
64 Synth Brass 2

Reed:
65 Soprano Sax
66 Alto Sax
67 Tenor Sax
68 Baritone Sax
69 Oboe
70 English Horn
71 Bassoon
72 Clarinet

Pipe:
73 Piccolo
74 Flute
75 Recorder
76 Pan Flute
77 Blown Bottle
78 Shakuhachi
79 Whistle
80 Ocarina

Synth Lead:
81 Lead 1 (square)
82 Lead 2 (sawtooth)
83 Lead 3 (calliope)
84 Lead 4 (chiff)
85 Lead 5 (charang)
86 Lead 6 (voice)
87 Lead 7 (fifths)
88 Lead 8 (bass + lead)

Synth Pad:
89 Pad 1 (new age)
90 Pad 2 (warm)
91 Pad 3 (polysynth)
92 Pad 4 (choir)
93 Pad 5 (bowed)
94 Pad 6 (metallic)
95 Pad 7 (halo)
96 Pad 8 (sweep)

Synth Effects:
97 FX 1 (rain)
98 FX 2 (soundtrack)
99 FX 3 (crystal)
100 FX 4 (atmosphere)
101 FX 5 (brightness)
102 FX 6 (goblins)
103 FX 7 (echoes)
104 FX 8 (sci-fi)

Ethnic:
105 Sitar
106 Banjo
107 Shamisen
108 Koto
109 Kalimba
110 Bag pipe
111 Fiddle
112 Shanai

Percussive:
113 Tinkle Bell
114 Agogo
115 Steel Drums
116 Woodblock
117 Taiko Drum
118 Melodic Tom
119 Synth Drum

Sound effects:
120 Reverse Cymbal
121 Guitar Fret Noise
122 Breath Noise
123 Seashore
124 Bird Tweet
125 Telephone Ring
126 Helicopter
127 Applause
128 Gunshot

General MIDI Drums
27 High Q (GM2)
28 Slap (GM2)
29 Scratch Push (GM2)
30 Scratch Pull (GM2)
31 Sticks (GM2)
32 Square Click (GM2)
33 Metronome Click (GM2)
34 Metronome Bell (GM2)
35 Bass Drum 2
36 Bass Drum 1
37 Side Stick
38 Snare Drum 1
39 Hand Clap
40 Snare Drum 2
41 Low Tom 2
42 Closed Hi-hat
43 Low Tom 1
44 Pedal Hi-hat
45 Mid Tom 2
46 Open Hi-hat
47 Mid Tom 1
48 High Tom 2
49 Crash Cymbal 1
50 High Tom 1
51 Ride Cymbal 1
52 Chinese Cymbal
53 Ride Bell
54 Tambourine
55 Splash Cymbal
56 Cowbell
57 Crash Cymbal 2
58 Vibra Slap
59 Ride Cymbal 2
60 High Bongo
61 Low Bongo
62 Mute High Conga
63 Open High Conga
64 Low Conga
65 High Timbale
66 Low Timbale
67 High Agogo
68 Low Agogo
69 Cabasa
70 Maracas
71 Short Whistle
72 Long Whistle
73 Short Guiro
74 Long Guiro
75 Claves
76 High Wood Block
77 Low Wood Block
78 Mute Cuica
79 Open Cuica
80 Mute Triangle
81 Open Triangle
82 Shaker (GM2)
83 Jingle Bell (GM2)
84 Belltree (GM2)
85 Castanets (GM2)
86 Mute Surdo (GM2)
87 Open Surdo (GM2)
*/
