import pako from 'pako';
import signals from './signals';

type BluePrint = {[key: string]: any};

export const MAX_SIGNAL_COUNT = 1000;

export function genBPObject(objects: BluePrint): BluePrint {
   const blueprint: BluePrint = {
      "blueprint": {
         "icons": [
            {
               "signal": {
                  "name": "constant-combinator"
               },
               "index": 1
            }
         ],
         "entities": [
         ],
         "item": "blueprint"
      }
   };
   for(let [i, obj] of objects.entries()) {
      blueprint.blueprint.entities.push({
         ...obj,
         index: i,
      });
   }
   return blueprint;
}

export function genCell(
   content: number[],
   ignore: {[type: string]: string[]} = {
      'fluid': [
         'parameter-0',
         'parameter-1',
         'parameter-2',
         'parameter-3',
         'parameter-4',
         'parameter-5',
         'parameter-6',
         'parameter-7',
         'parameter-8',
         'parameter-9',
      ],
      'item': [
         'parameter-0',
         'parameter-1',
         'parameter-2',
         'parameter-3',
         'parameter-4',
         'parameter-5',
         'parameter-6',
         'parameter-7',
         'parameter-8',
         'parameter-9',
      ],
      'virtual': [
         'signal-A',
         'signal-B',
         'signal-C',
         'signal-D',
         'signal-E',
         'signal-F',
         'signal-G',
         'signal-H',
         'signal-anything',
         'signal-each',
         'signal-everything',
         'signal-fluid-parameter',
         'signal-fuel-parameter',
         'signal-item-parameter',
         'signal-signal-parameter',
      ],
      'recipe': [
         'parameter-0',
         'parameter-0-recycling',
         'parameter-1',
         'parameter-1-recycling',
         'parameter-2',
         'parameter-2-recycling',
         'parameter-3',
         'parameter-3-recycling',
         'parameter-4',
         'parameter-4-recycling',
         'parameter-5',
         'parameter-5-recycling',
         'parameter-6',
         'parameter-6-recycling',
         'parameter-7',
         'parameter-7-recycling',
         'parameter-8',
         'parameter-8-recycling',
         'parameter-9',
         'parameter-9-recycling',
      ],
   }
): BluePrint {
   console.assert(content.length <= MAX_SIGNAL_COUNT, `content ${content.length} exceeds ${MAX_SIGNAL_COUNT}`);
   const keys: BluePrint = {
      "entity_number": 1,
      "name": "constant-combinator",
      "position": {
         "x": 0,
         "y": 0
      },
      "control_behavior": {
         "sections": {
            "sections": [
               {
                  "index": 1,
                  "filters": [
                  ]
               }
            ]
         },
         "is_on": true
      }
   };
   let index = 0;
   for(let signalType of Object.keys(signals)) {
      for(let signal of signals[signalType]) {
         if(ignore[signalType] && (ignore[signalType][0] == '*' || ignore[signalType].includes(signal))) {
            continue;
         }
         keys.control_behavior.sections.sections[0].filters.push({
            "index": index+1,
            "type": signalType,
            "name": signal,
            "quality": "normal",
            "comparator": "=",
            "count": content[index],
         });
         index++;
         if(index >= content.length) break;
      }
      if(index >= content.length) break;
   }
   return keys;
}

export function encodeBP(blueprint: BluePrint): string {
   const compressed = pako.deflate(JSON.stringify(blueprint));
   const b64 = btoa(String.fromCharCode.apply(null, compressed));
   return '0' + b64;
}