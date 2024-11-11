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
   notes: [number, number][] = [];

   push(note: number, delay: number) {
      this.notes.push([note, delay]);
   }

   data(): number[] { 
      if(this.instrument == Instrument.Nothing) return [];

      const maxNote = MAX_NOTE[this.instrument];
      let noteShift = 0;
      return this.notes.map(([note, delay]) => {
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
         return delay << 8 | (note + noteShift);
      });
   }

   getInstrumentID(): number {
      return FACTORIO_INSTRUMENT_ID[this.instrument];
   }

   setMidiInstrument(program: number) {
      this.instrument = midiToFactorioInstrument(program);
   }

   empty(): boolean {
      return this.notes.length === 0;
   }

}

function midiToFactorioInstrument(program: number) {
   switch(program) {
      case 0:
         return Instrument.DrumKit;

      case 1: // Acoustic Grand Piano
      case 2: // Bright Acoustic Piano
      case 3: // Electric Grand Piano
      case 4: // Honky-tonk Piano
         return Instrument.PluckedString;

      case 7: // Harpsichord
      case 8: // Clavinet
      case 16: // Dulcimer
      case 25: // Acoustic Guitar (nylon)
      case 26: // Acoustic Guitar (steel)
      case 27: // Electric Guitar (jazz)
      case 28: // Electric Guitar (clean)
      case 29: // Electric Guitar (muted)
      case 46: // Pizzicato Strings
      case 47: // Orchestral Harp
      case 105: // Sitar
      case 106: // Banjo
      case 107: // Shamisen
      case 108: // Koto
      case 109: // Kalimba
         return Instrument.PluckedString;

      case 9: // Celesta
      case 15: // Tubular Bells
         return Instrument.Celesta;

      case 10: // Glockenspiel
      case 11: // Music Box
      case 12: // Vibraphone
      case 13: // Marimba
      case 14: // Xylophone
      case 113: // Tinkle Bell
         return Instrument.Vibraphone;

      case 5: // Electric Piano case 1: //
      case 6: // Electric Piano case 2: //
      case 17: // Drawbar Organ
      case 18: // Percussive Organ
      case 19: // Rock Organ
      case 20: // Church Organ
      case 21: // Reed Organ
      case 33: // Acoustic Bass
      case 34: // Electric Bass (finger)
      case 35: // Electric Bass (pick)
      case 36: // Fretless Bass
      case 37: // Slap Bass case 1: //
      case 38: // Slap Bass case 2: //
      case 39: // Synth Bass case 1: //
      case 40: // Synth Bass case 2: //
      case 118: // Melodic Tom
      case 119: // Synth Drum
         return Instrument.Bass;

      case 41: // Violin
      case 42: // Viola
      case 43: // Cello
      case 44: // Contrabass
      case 45: // Tremolo Strings
      case 57: // Trumpet
      case 58: // Trombone
      case 59: // Tuba
      case 60: // Muted Trumpet
      case 61: // French Horn
      case 62: // Brass Section
      case 63: // Synth Brass case 1: //
      case 64: // Synth Brass case 2: //
      case 65: // Soprano Sax
      case 66: // Alto Sax
      case 67: // Tenor Sax
      case 68: // Baritone Sax
      case 69: // Oboe
      case 70: // English Horn
      case 71: // Bassoon
      case 72: // Clarinet
      case 81: // Lead case 1: // (square)
      case 110: // Bag pipe
      case 111: // Fiddle
         return Instrument.Square;

      case 30: // Overdriven Guitar
      case 31: // Distortion Guitar
      case 32: // Guitar harmonics
      case 83: // Lead case 3: // (calliope)
      case 84: // Lead case 4: // (chiff)
      case 85: // Lead case 5: // (charang)
      case 86: // Lead case 6: // (voice)
      case 87: // Lead case 7: // (fifths)
      case 88: // Lead case 8: // (bass + lead)
         return Instrument.Lead;

      case 48: // Timpani
      case 89: // Pad case 1: // (new age)
      case 90: // Pad case 2: // (warm)
      case 91: // Pad case 3: // (polysynth)
      case 92: // Pad case 4: // (choir)
      case 93: // Pad case 5: // (bowed)
      case 94: // Pad case 6: // (metallic)
      case 95: // Pad case 7: // (halo)
      case 96: // Pad case 8: // (sweep)
      case 99: // FX case 3: // (crystal)
      case 114: // Agogo
      case 115: // Steel Drums
         return Instrument.SteelDrum;

      case 22: // Accordion
      case 23: // Harmonica
      case 24: // Tango Accordion
      case 49: // String Ensemble case 1: //
      case 50: // String Ensemble case 2: //
      case 51: // Synth Strings case 1: //
      case 52: // Synth Strings case 2: //
      case 53: // Choir Aahs
      case 54: // Voice Oohs
      case 55: // Synth Voice
      case 56: // Orchestra Hit
      case 73: // Piccolo
      case 74: // Flute
      case 75: // Recorder
      case 76: // Pan Flute
      case 77: // Blown Bottle
      case 78: // Shakuhachi
      case 79: // Whistle
      case 80: // Ocarina
      case 82: // Lead case 2: // (sawtooth)
      case 112: // Shanai
         return Instrument.Sawtooth;

      case 116: // Woodblock
         return Instrument.WoodBlock;

      case 117: // Taiko Drum
         return Instrument.BassDrum;

      case 97: // FX case 1: // (rain)
      case 98: // FX case 2: // (soundtrack)
      case 100: // FX case 4: // (atmosphere)
      case 101: // FX case 5: // (brightness)
      case 102: // FX case 6: // (goblins)
      case 103: // FX case 7: // (echoes)
      case 104: // FX case 8: // (sci-fi)
      case 120: // Reverse Cymbal
      case 121: // Guitar Fret Noise
      case 122: // Breath Noise
      case 123: // Seashore
      case 124: // Bird Tweet
      case 125: // Telephone Ring
      case 126: // Helicopter
      case 127: // Applause
      case 128: // Gunshot
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
