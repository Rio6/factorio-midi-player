const TICK_PER_US = 60 / 1000000;
const FACTORIO_PLAYER_DELAY = 3;
const FACTORIO_NOTE_OFFSET = -28;

enum Instrument {
   Nothing,
   Piano,
   DrumKit,
   Bass,
   Lead,
   Sawtooth,
   Square,
   Celesta,
   Vibraphone,
   PluckedString,
   SteelDrum,

   // Constant note drum kit
   WoodBlock,
   BassDrum,
}

const MAX_NOTE: {[instrument in Instrument]: number} = {
   [Instrument.Nothing]:        12,
   [Instrument.Piano]:          48,
   [Instrument.DrumKit]:        17,
   [Instrument.Bass]:           36,
   [Instrument.Lead]:           36,
   [Instrument.Sawtooth]:       36,
   [Instrument.Square]:         36,
   [Instrument.Celesta]:        36,
   [Instrument.Vibraphone]:     36,
   [Instrument.PluckedString]:  36,
   [Instrument.SteelDrum]:      36,
   [Instrument.WoodBlock]:      17,
   [Instrument.BassDrum]:       17,
};

const FACTORIO_INSTRUMENT_ID: {[instrument in Instrument]: number} = {
   [Instrument.Nothing]:         0,
   [Instrument.DrumKit]:         2,
   [Instrument.Piano]:           3,
   [Instrument.Bass]:            4,
   [Instrument.Lead]:            5,
   [Instrument.Sawtooth]:        6,
   [Instrument.Square]:          7,
   [Instrument.Celesta]:         8,
   [Instrument.Vibraphone]:      9,
   [Instrument.PluckedString]:  10,
   [Instrument.SteelDrum]:      11,
   [Instrument.WoodBlock]:       2,
   [Instrument.BassDrum]:        2,
};

export default class Track {
   instrument = Instrument.Piano;
   volume = 1;
   tempo = 500000;
   division: number;

   notes: [number, number][] = [];
   totalTime = 0;

   constructor(division: number) {
      this.division = division;
   }

   updateDelta(delta: number) {
      this.totalTime += delta;
   }

   pushNote(note: number) {
      this.notes.push([note, this.totalTime]);
   }

   data(): number[][] {
      if(this.instrument == Instrument.Nothing) return [];
      const maxNote = MAX_NOTE[this.instrument];

      const deltaToTick = (delta: number) => {
         return Math.round(delta * this.tempo / this.division * TICK_PER_US) - FACTORIO_PLAYER_DELAY;
      };

      const trackData = [];
      const timeData = [];
      let trackIndex = -1;

      let noteShift = 0;
      for(let [note, time] of this.notes) {
         let delay;
         while(true) {
            delay = deltaToTick(time - timeData[trackIndex]);
            if(trackIndex >= 0 && delay >= 0) {
               break;
            }

            trackIndex += 1;
            if(timeData[trackIndex] == null) {
               trackData.push([])
               timeData.push(0);
            }
         }

         if(this.instrument == Instrument.WoodBlock) {
            note = 16;
         } else if(this.instrument == Instrument.BassDrum) {
            note = 2;
         } else if(this.instrument == Instrument.DrumKit) {
            note = midiToFactorioDrum(note);
         } else {
            note += FACTORIO_NOTE_OFFSET;
            while(note + noteShift > maxNote) noteShift -= 12;
            while(note + noteShift < 1)       noteShift += 12;
         }

         trackData[trackIndex].push(delay << 8 | (note + noteShift));
         timeData[trackIndex] = time;
         trackIndex = 0;
      }

      return trackData;
   }

   getInstrumentID(): number {
      return FACTORIO_INSTRUMENT_ID[this.instrument];
   }

   getVolume(): number {
      let factor = 1;
      if(this.instrument == Instrument.Square) {
         factor = 0.2;
      }
      return this.volume;
   }

   setMidiInstrument(program: number, channel: number) {
      this.instrument = midiToFactorioInstrument(program, channel);
   }

   setMidiVolume(volume: number) {
      this.volume = volume / 127;
   }

   setTempo(tempo: number) {
      this.tempo = tempo;
   }
}

function midiToFactorioInstrument(program: number, channel: number) {
   if(channel == 9) {
      return Instrument.DrumKit;
   }

   switch(program) {
      case 0: // Acoustic Grand Piano
      case 1: // Bright Acoustic Piano
      case 2: // Electric Grand Piano
      case 3: // Honky-tonk Piano
         return Instrument.Piano;

      case 6: // Harpsichord
      case 7: // Clavinet
      case 15: // Dulcimer
      case 24: // Acoustic Guitar (nylon)
      case 25: // Acoustic Guitar (steel)
      case 26: // Electric Guitar (jazz)
      case 27: // Electric Guitar (clean)
      case 28: // Electric Guitar (muted)
      case 45: // Pizzicato Strings
      case 46: // Orchestral Harp
      case 104: // Sitar
      case 105: // Banjo
      case 106: // Shamisen
      case 107: // Koto
      case 108: // Kalimba
         return Instrument.PluckedString;

      case 8: // Celesta
      case 14: // Tubular Bells
         return Instrument.Celesta;

      case 9: // Glockenspiel
      case 10: // Music Box
      case 11: // Vibraphone
      case 12: // Marimba
      case 13: // Xylophone
      case 112: // Tinkle Bell
         return Instrument.Vibraphone;

      case 4: // Electric Piano case 0: //
      case 5: // Electric Piano case 1: //
      case 16: // Drawbar Organ
      case 17: // Percussive Organ
      case 18: // Rock Organ
      case 19: // Church Organ
      case 20: // Reed Organ
      case 32: // Acoustic Bass
      case 33: // Electric Bass (finger)
      case 34: // Electric Bass (pick)
      case 35: // Fretless Bass
      case 36: // Slap Bass case 0: //
      case 37: // Slap Bass case 1: //
      case 38: // Synth Bass case 0: //
      case 39: // Synth Bass case 1: //
      case 117: // Melodic Tom
      case 118: // Synth Drum
         return Instrument.Bass;

      case 40: // Violin
      case 41: // Viola
      case 42: // Cello
      case 43: // Contrabass
      case 44: // Tremolo Strings
      case 56: // Trumpet
      case 57: // Trombone
      case 58: // Tuba
      case 59: // Muted Trumpet
      case 60: // French Horn
      case 61: // Brass Section
      case 62: // Synth Brass case 0: //
      case 63: // Synth Brass case 1: //
      case 64: // Soprano Sax
      case 65: // Alto Sax
      case 66: // Tenor Sax
      case 67: // Baritone Sax
      case 68: // Oboe
      case 69: // English Horn
      case 70: // Bassoon
      case 71: // Clarinet
      case 80: // Lead case 0: // (square)
      case 109: // Bag pipe
      case 110: // Fiddle
         return Instrument.Square;

      case 29: // Overdriven Guitar
      case 30: // Distortion Guitar
      case 31: // Guitar harmonics
      case 82: // Lead case 2: // (calliope)
      case 83: // Lead case 3: // (chiff)
      case 84: // Lead case 4: // (charang)
      case 85: // Lead case 5: // (voice)
      case 86: // Lead case 6: // (fifths)
      case 87: // Lead case 7: // (bass + lead)
         return Instrument.Lead;

      case 47: // Timpani
      case 88: // Pad case 0: // (new age)
      case 89: // Pad case 1: // (warm)
      case 90: // Pad case 2: // (polysynth)
      case 91: // Pad case 3: // (choir)
      case 92: // Pad case 4: // (bowed)
      case 93: // Pad case 5: // (metallic)
      case 94: // Pad case 6: // (halo)
      case 95: // Pad case 7: // (sweep)
      case 98: // FX case 2: // (crystal)
      case 113: // Agogo
      case 114: // Steel Drums
         return Instrument.SteelDrum;

      case 21: // Accordion
      case 22: // Harmonica
      case 23: // Tango Accordion
      case 48: // String Ensemble case 0: //
      case 49: // String Ensemble case 1: //
      case 50: // Synth Strings case 0: //
      case 51: // Synth Strings case 1: //
      case 52: // Choir Aahs
      case 53: // Voice Oohs
      case 54: // Synth Voice
      case 55: // Orchestra Hit
      case 72: // Piccolo
      case 73: // Flute
      case 74: // Recorder
      case 75: // Pan Flute
      case 76: // Blown Bottle
      case 77: // Shakuhachi
      case 78: // Whistle
      case 79: // Ocarina
      case 81: // Lead case 1: // (sawtooth)
      case 111: // Shanai
         //return Instrument.Sawtooth;
         return Instrument.Square;

      case 115: // Woodblock
         return Instrument.WoodBlock;

      case 116: // Taiko Drum
         return Instrument.BassDrum;

      case 96: // FX case 0: // (rain)
      case 97: // FX case 1: // (soundtrack)
      case 99: // FX case 3: // (atmosphere)
      case 100: // FX case 4: // (brightness)
      case 101: // FX case 5: // (goblins)
      case 102: // FX case 6: // (echoes)
      case 103: // FX case 7: // (sci-fi)
      case 119: // Reverse Cymbal
      case 120: // Guitar Fret Noise
      case 121: // Breath Noise
      case 122: // Seashore
      case 123: // Bird Tweet
      case 124: // Telephone Ring
      case 125: // Helicopter
      case 126: // Applause
      case 127: // Gunshot
      default:
         return Instrument.Nothing;
   }
}

function midiToFactorioDrum(note: number): number {
   switch(note) {
      case 36: // Bass Drum 1
         return 1;

      case 35: // Bass Drum 2
      case 41: // Low Tom 2
      case 43: // Low Tom 1
      case 45: // Mid Tom 2
      case 47: // Mid Tom 1
      case 48: // High Tom 2
      case 50: // High Tom 1
      case 60: // High Bongo
      case 61: // Low Bongo
      case 62: // Mute High Conga
      case 63: // Open High Conga
      case 64: // Low Conga
         return 2;

      case 38: // Snare Drum 1
         return 4;

      case 40: // Snare Drum 2
         return 5;

      case 44: // Pedal Hi-hat
         return 6;

      case 42: // Closed Hi-hat
         return 7;

      case 73: // Short Guiro
      case 74: // Long Guiro
         return 8;

      case 78: // Mute Cuica
      case 79: // Open Cuica
      case 71: // Short Whistle
      case 72: // Long Whistle
         return 9;

      case 56: // Cowbell
      case 53: // Ride Bell
         return 10;

      case 37: // Side Stick
         return 11;

      case 46: // Open Hi-hat
      case 49: // Crash Cymbal 1
      case 52: // Chinese Cymbal
      case 51: // Ride Cymbal 1
      case 55: // Splash Cymbal
      case 57: // Crash Cymbal 2
      case 59: // Ride Cymbal 2
         return 12;

      case 39: // Hand Clap
      case 75: // Claves
      case 58: // Vibra Slap
         return 14;

      case 70: // Maracas
      case 69: // Cabasa
         return 15;

      case 76: // High Wood Block
      case 77: // Low Wood Block
      case 65: // High Timbale
      case 66: // Low Timbale
      case 67: // High Agogo
      case 68: // Low Agogo
         return 16;

      case 54: // Tambourine
      case 80: // Mute Triangle
      case 81: // Open Triangle
         return 17;

      default:
         return 0;
   }
}
