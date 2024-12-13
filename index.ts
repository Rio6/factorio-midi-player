import { midiToBP } from './converter';

function init() {
   const generateElement = document.getElementById('generate-button');
   const copyElement = document.getElementById('copy-button');
   const fileElement = document.getElementById('midi-upload');
   const outputElement = document.getElementById('bp-output');
   const modeElement = document.getElementById('speaker-mode');
   const volumeElement = document.getElementById('volume');

   if(
      fileElement instanceof HTMLInputElement &&
      modeElement instanceof HTMLSelectElement &&
      volumeElement instanceof HTMLInputElement &&
      outputElement instanceof HTMLElement
   ) {
      generateElement.onclick = async () => {
         if(fileElement.files.length > 0) {
            const file = fileElement.files[0];
            const bp = await midiToBP(await file.arrayBuffer(), modeElement.value, volumeElement.valueAsNumber / +volumeElement.max);
            outputElement.textContent = bp;
            copyElement.textContent = "Copy";
         }
      };
   }

   if(
      copyElement instanceof HTMLButtonElement &&
      outputElement instanceof HTMLElement
   ) {
      copyElement.addEventListener('click', () => {
         navigator.clipboard.writeText(outputElement.textContent);
         copyElement.textContent = "Copied";
      });
   }
}

window.onload = init;
