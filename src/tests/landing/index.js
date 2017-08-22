import {slide} from "./slide";
import {device} from "./device";
import {selection} from "./device/selection";
import {media} from "./media";

export function landing(title = '', items = []) {
  const intdevice = device('base');
  const intselection = selection('New device:');
  const bg = media('media/videoplayback.mp4');
  const start = slide('start', 'Started');
  const two = slide('two', 'Two');
  const three = slide('three', 'Three');
  const end = slide('end', 'End');
  const result = `
    <div class="landing">
      ${bg}
      ${intselection}
      ${intdevice}
      <div class="slides">
        ${start}
        ${two}
        ${three}
        ${end}
      </div>
    </div>
  `;
  return result;
}
