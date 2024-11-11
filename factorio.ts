import pako from 'pako';
import signals from './signals';

export type BluePrint = any;

export function genBPEntity(entities: BluePrint[]): BluePrint {
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
   for(let [i, ent] of entities.entries()) {
      blueprint.blueprint.entities.push({
         ...ent,
         index: i,
      });
   }
   return blueprint;
}

export function genCell(
   content: number[],
   ignore: {[type: string]: string[]} = {
      'virtual': [
         'signal-A',
         'signal-B',
      ],
   }
): [BluePrint, number] {
   const keys: BluePrint = {
      "sections": {
         "sections": [
            {
               "index": 1,
               "filters": [
               ]
            }
         ]
      }
   };
   let index = 0;
   for(let signalType of Object.keys(signals)) {
      for(let signal of signals[signalType]) {
         if(ignore[signalType] && (ignore[signalType][0] == '*' || ignore[signalType].includes(signal))) {
            continue;
         }
         keys.sections.sections[0].filters.push({
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
   return [keys, index];
}

export function getEntityByDescription(bp: BluePrint, name: string): BluePrint {
   return bp.blueprint.entities.filter((ent: BluePrint) => ent.player_description == name)[0];
}

export function filterBP(bp: BluePrint, filter: ((ent: BluePrint) => boolean) | null) {
   const bpf = structuredClone(bp);
   if(filter == null) return bpf;

   bpf.blueprint.entities = bpf.blueprint.entities.filter(filter);

   const ids = bpf.blueprint.entities.map((ent: BluePrint) => ent.entity_number);
   bpf.blueprint.wires = bpf.blueprint.wires.filter((wire: [number, number, number, number]) =>
      ids.includes(wire[0]) && ids.includes(wire[2]));

   return bpf;
}

export function encodeBP(blueprint: BluePrint): string {
   const compressed = pako.deflate(JSON.stringify(blueprint));
   const b64 = btoa(String.fromCodePoint.apply(null, compressed));
   return '0' + b64;
}

export function decodeBP(blueprint: string): BluePrint {
   const binary = atob(blueprint.slice(1));
   const compressed = Uint8Array.from(binary, c => c.charCodeAt(0));
   const inflated = pako.inflate(compressed);
   const decoded = new TextDecoder('UTF-8').decode(inflated);
   return JSON.parse(decoded);
}
