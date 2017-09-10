import Bar from "../bar";
import {injFun} from "../inj";
import ANCESTRY_FILE from "./ancestry";
//import printMe from "./print";

export default function patternsWrapper() {


  //base
  //confirm("go patterns?");
  //prompt("what is your name", "...");
  //var theNumber = Number(prompt("Select num", ""));
  //if (!isNaN(theNumber))
  //  alert("square number" +  theNumber * theNumber);

  //var num = Number(prompt("Выбери число", "0"));
  var selectnum = 30;
  if (selectnum < 10)
    console.log("Few");
  else if (selectnum < 100)
    console.log("Fine");
  else
    console.log("Many");

  var vasyaDebt = 140;
  vasyaDebt = vasyaDebt  - 35;
  console.log("vasyaDebt", vasyaDebt);

  var ione = 3, itwo = 2;
  console.log(ione + itwo);

  //return val
  console.log(Math.max(2, 4));
  console.log(Math.min(2, 4) + 100);

  var mainnumber = 0;
  while (mainnumber <= 12) {
    console.log("mainnumber", mainnumber);
    mainnumber = mainnumber + 2;
  }

  //abstraction
  //bad
  var array = [1, 2, 3];
  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    console.log("current:", current);
  }

  //norm
  function logEach(array) {
    for (var i = 0; i < array.length; i++)
      console.log("Array:", array[i]);
  }

  //abstraction
  function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
      action(array[i]);
  }

  logEach(array);
  forEach(["value1", "value2", "value3"], console.log);

  var numbers = [1, 2, 3, 4, 5], sum = 0;
  forEach(numbers, function(number) {
    sum += number;
  });
  console.log(sum);

  //Higher-order
  function greaterThan(n) {
    return function(m) { return m > n; };
  }
  var greaterThan10 = greaterThan(10);
  console.log(greaterThan10(11));

  //return x * x;

  //sampl
  function intRes() {
    const intbar = document.querySelector('#output');
    const see = document.querySelector('[data-role="see"]');
    const mainbar = new Bar('ololo', intbar, see);
    mainbar.speak();
  }

  intRes();

  //loader
  injFun();

  //JSON sample

  var string = JSON.stringify({name: "X", born: 1980});
  console.log(string);
  console.log(JSON.parse(string).born);

  var ancestry = JSON.parse(ANCESTRY_FILE);
  console.log("ancestry", ancestry.length);

  //Filter
  function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
      if (test(array[i]))
        passed.push(array[i]);
    }
    return passed;
  }

  console.log(filter(ancestry, function(person) {
    return person.born > 1900 && person.born < 1925;
  }));

  console.log(ancestry.filter(function(person) {
    return person.father == "Lieven van Haverbeke";
  }));

  //Transform array
  function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
      mapped.push(transform(array[i]));
    return mapped;
  }

  var overNinety = ancestry.filter(function(person) {
    return person.died - person.born > 90;
  });

  console.log(map(overNinety, function(person) {
    return person.name;
  }));

  //reduce, "fold"
  function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
      current = combine(current, array[i]);
    return current;
  }

  console.log(reduce([1, 2, 3, 4], function(a, b) {
    return a + b;
  }, 0));
  // → 10

  console.log(ancestry.reduce(function(min, cur) {
    if (cur.born < min.born) return cur;
    else return min;
  }));

  //Сombine functions
  function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }
  function age(p) { return p.died - p.born; }
  function male(p) { return p.sex == "m"; }
  function female(p) { return p.sex == "f"; }

  console.log(average(ancestry.filter(male).map(age)));
  // → 61.67
  console.log(average(ancestry.filter(female).map(age)));

  //Binding
  var theSet = ["Carel Haverbeke", "Maria van Brussel",
                "Donald Duck"];
  function isInSet(set, person) {
    return set.indexOf(person.name) > -1;
  }

  console.log(ancestry.filter(function(person) {
    return isInSet(theSet, person);
  }));
  // → [{name: "Maria van Brussel", …},
  //    {name: "Carel Haverbeke", …}]
  console.log("bind:", ancestry.filter(isInSet.bind(null, theSet)));
  // → … same result

  //regexp
  var strregexp = "i love JavaScript!"; // search this string
  var regexp = /ve/;
  console.log("regexp", strregexp.search(regexp));
  console.log("regexp", strregexp.search( /VE/) ); // -1
  console.log("regexp", strregexp.search( /VE/i) ); // 2

}
