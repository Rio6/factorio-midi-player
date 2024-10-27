import pako from 'pako';
import signals from './signals';

type BluePrint = {[key: string]: any};

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

export function genKeys(): BluePrint {
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
   for(let signalType of Object.keys(signals)) {
      for(let [i, signal] of signals[signalType].entries()) {
         keys.control_behavior.sections.sections[0].filters.push(
            {
               "index": i+1,
               "type": signalType,
               "name": signal,
               "quality": "normal",
               "comparator": "=",
               "count": i+1
            }
         );
      }
   }
   return keys;
}

export function encodeBP(blueprint: BluePrint): string {
   const compressed = pako.deflate(JSON.stringify(blueprint));
   const b64 = btoa(String.fromCharCode.apply(null, compressed));
   return '0' + b64;
}
