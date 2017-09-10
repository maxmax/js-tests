import {Slide} from "./slide";
import {Device} from "./device";
import {Selection} from "./device/selection";
import {Media} from "./media";

export function layout(props) {

  const {title, url} = props;

  const start = Slide('start', 'Started');
  const two = Slide('two', 'Two');
  const three = Slide('three', 'Three');
  const end = Slide('end', 'Fin');

  const result = `
    <div class="landing">
      ${Media(url)}
      ${Selection('New device:')}
      ${Device('base')}
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
