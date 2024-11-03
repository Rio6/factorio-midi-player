import { genCell, genBPObject, encodeBP, MAX_SIGNAL_COUNT } from './factorio';
import { midiToBP } from './converter';

function init() {
   const buttonElement = document.getElementById('generate-button');
   const fileElement = document.getElementById('midi-upload');
   const outputElement = document.getElementById('bp-output');

   if(fileElement instanceof HTMLInputElement) {
      buttonElement.onclick = async () => {
         if(fileElement.files.length > 0) {
            const file = fileElement.files[0];
            const bp = await midiToBP(await file.arrayBuffer());
            outputElement.textContent = bp;
         }
      };
   }

   const keyRom = [...Array(MAX_SIGNAL_COUNT)].map((_, i) => i+1);
   console.log(encodeBP(genBPObject([genCell(keyRom)])));
}

window.onload = init;
