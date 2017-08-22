import {control} from "./control";
export function device(device = '') {
  const option = control('new device control');
  const result = `
    <section data-targets='${"device-" + device}' id='deviceInt'>
      <div class="top"></div>
      <div class="air"></div>
      <div class="bot"></div>
      ${option}
    </section>
  `;
  return result;
}
