import AFRAME from 'aframe';


window.AFRAME = window.AFRAME || AFRAME;
window.THREE = window.THREE || AFRAME.THREE;



// Load inspector 
const inspectorScript = document.createElement('script');

inspectorScript.src =
  'https://unpkg.com/aframe-inspector@1.7.0/dist/aframe-inspector.min.js';

document.head.appendChild(inspectorScript);


