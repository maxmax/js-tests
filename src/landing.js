import _ from 'lodash';
import {devconf} from "./tests/landing/device/conf";
import {checkVisible} from "./tests/landing/helpers";
import {layout} from "./tests/landing/layout";
import './tests/landing/style.css';
import videobg from './media/videoplayback.mp4';

//console.log("Mount Landing!!!");

function App(options) {

  const view = options.elem;

  view.innerHTML = layout({title: 'under water', url: videobg});

  let element = hotlayer();
  view.appendChild(element);

  function hotlayer() {
    var element = document.createElement('section');
    element.className = 'event-layer';
    return element;
  }

  //Device
  //const deviceRun = view.querySelector('#deviceSelect');
  devconf(view.querySelector('#deviceSelect'));

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

}

const app = new App({
  elem: document.getElementById('view')
});
