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
}

window.onload = init;
