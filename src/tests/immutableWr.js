var Immutable = require('immutable');

export default function immutableWrapper() {

  var map1 = Immutable.Map({a:1, b:2, c:3});
  var map2 = map1.set('b', 50);

  console.log('Mount immutable!');
  console.log('Result:', map1.get('b'), map2.get('b'));

  var stack = new Immutable.Stack();
  stack = stack.push( 2, 1, 0 );
  stack.size;
  stack.get(); //2
  stack.get(1); //1
  stack.get(2); //0
  stack = stack.pop(); // [1, 0]
  console.log('stack:', stack.get(2));

  console.log("=====================/End/=====================");

}
