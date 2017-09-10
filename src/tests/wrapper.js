import {createStore} from "redux";

import {quest} from './quest';

//components
import {foo} from "./foo";
import {one, two} from './nums';
import printMe from "./print";

import '../style.css';
import Icon from '../icon.jpg';
import Data from '../data.xml';
import {cube} from './maths.js';

import patternsWrapper from './patterns';

const resultColor = "background: green; color: white";
const errorColor = "background: red; color: white";
const successColor = "background: #28a745; color: white";

export default function testWrapper() {

  console.log('MountWrapper!');

  const impAmount = (`Amount of imports: ${one + two}`);
  console.log("%c impAmount:", successColor, impAmount);

  //tmp
  //const footerOutput = `
  //  <section id="output">
  //    <h2>test tmp</h2>
  //    <button class="primary hello" role="button" data-role="see">Action</button>
  //  </section>
  //`;

  function component() {
    var element = document.createElement('section');
    //var btn = document.createElement('button');
    //element.innerHTML = _.join(['<h1>JS base</h1>', foo(quest), footerOutput], ' ');
    element.innerHTML = _.join(['<h1>JS base</h1>', foo(quest)], ' ');

    //var myIcon = new Image();
    //myIcon.src = Icon;
    //myIcon.className = 'media';
    //element.appendChild(myIcon);
    //console.log(Data);

    //btn.innerHTML = 'Click me and check the console printMe!';
    //btn.onclick = printMe;
    //element.appendChild(btn);

    return element;
  }

  let element = component(); // Store the element to re-render on print.js changes
  document.body.appendChild(element);

  console.log("=====================/patterns etc/=====================");

  patternsWrapper();

  //end
  console.log("==================/end/========================");
  console.log("==================/Redux/========================");

  //Redux
  function counter(state = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
    }
  }

  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
  let store = createStore(
    counter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  store.subscribe(() =>
    console.log("subscribe:", store.getState())
  )

  // The only way to mutate the internal state is to dispatch an action.
  // The actions can be serialized, logged or stored and later replayed.
  store.dispatch({ type: 'INCREMENT' })
  // 1
  store.dispatch({ type: 'INCREMENT' })
  // 2
  store.dispatch({ type: 'DECREMENT' })
  // 1
  store.dispatch({ type: 'INCREMENT' })
  store.dispatch({ type: 'INCREMENT' })

  console.log("=====================/End/=====================");

}
