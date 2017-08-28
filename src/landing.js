import _ from 'lodash';
import {devconf} from "./tests/landing/device/conf";
import {checkVisible} from "./tests/landing/helpers";
import './tests/landing/style.css';

//import './media/videoplayback.mp4';
//import vplay from './media/videoplayback.mp4';

console.log("Mount Landing!!!");
//console.log("vplay", vplay);
//select device
const view = document.getElementById('view');

const deviceRun = view.querySelector('#deviceSelect');
devconf(deviceRun);

//Slide events
const hrtwo = view.querySelector("#hr-two .caption");
const hrthree = view.querySelector("#hr-three .caption");
const hrselect = view.querySelector("[class*='selection'] .form-control");

window.onscroll = function() {
  if (checkVisible(hrtwo)){
    view.className = "two";
  } else if (checkVisible(hrthree)){
    view.className = "three";
  } else if (checkVisible(hrselect)){
    view.className = "top";
  } else {
    view.className = "def";
  }
};

let element = hotlayer();
view.appendChild(element);

function hotlayer() {
  var element = document.createElement('section');
  element.className = 'event-layer';
  return element;
}
