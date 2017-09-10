import {Control} from "./control";
export const Device = (device = 'default') =>
  `<section data-targets='${"device-" + device}' id='deviceInt'>
    <div class="top"></div>
    <div class="air"></div>
    <div class="bot"></div>
    ${Control('new device control')}
  </section>`
