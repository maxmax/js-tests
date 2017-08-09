import _ from 'lodash';
import {
  square,
  counterValue,
  resultValue,
  counterThree,
  isOutput,
  whatOutput,
  whatValue,
  sevenValue,
  eightValue,
  shouldToString,
  whatIs,
  whatIsOutput,
  twelveResult,
  whatExecuted,
  fourteenOutput,
  fifteenOutput,
  sixteenOutput,
  sumArguments,
  sumArgumentsSecond,
  eighteenth,
  nineteenth,
  twentieth,
  twentyOne,
  twentyTwo,
  twentyThree,
  twentyFour,
  twentyFive,
  twentySix,
  twentySeven,
  twentyEight,
  twentyNine,
  thirtyOutput,
  thirtyOne,
  thirtyTwo,
  thirtyThree,
  thirtyFour,
  thirtyFive} from "./tests";

const resultColor = "background: green; color: white"
const errorColor = "background: red; color: white"

//const md_square = `${square}`;
//const md_counterValue = `${counterValue}`;
//const md_val = `${square}`;
var md_arr = [square];

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['<h1>Base tests</h1>', md_arr], ' ');

  return element;
}

document.body.appendChild(component());

//test int
console.log("square:", square(11));

console.log("1. What is the value of counter after executing the following piece of code? :", counterValue(10));
console.log("2. What is the value of result? :", resultValue());
console.log("3. What is the value of result? :", counterThree());
console.log("4. What is the output? :", isOutput());
console.log("5. What is the output? :", whatOutput());
console.log("6. What is the value of a, b? :", sevenValue(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']));
console.log("7. What is the value of result? :", sevenValue());
console.log("8. What is the value of result? :", eightValue());
console.log("9. What should the toString function be?  to print 'I Amory Blaine am 102 years old.' :", shouldToString());
console.log("10. What is the value of result? :", whatIs());
console.log("11. What is the output? :", whatIsOutput());
console.log("12. What is the value of result? :", twelveResult());
console.log("13. What is the value of child.b after this piece of code is executed? :", whatExecuted());
console.log("14. What is the output? :", fourteenOutput());
console.log("15. What is the output? :", fifteenOutput());
console.log("16. What is the output? :", sixteenOutput());
console.log("%c 17. Complete the implementation of this method so that it returns the sum of its arguments. :", resultColor, sumArguments(1,2,3,4));
console.log("%c 17.2 sumArgumentsSecond. :", resultColor, sumArgumentsSecond(0,1,2,3,4));
console.log("18. What is the value of result? :", eighteenth());
console.log("19. What is the value of result? :", nineteenth());
console.log("%c 20. What is the output? :", errorColor, twentieth());
console.log("21. What is the value of results? :", twentyOne());
console.log("22. What is the output? :", twentyTwo());
console.log("23. What is the output? :", twentyThree());
console.log("24. What is the output? :", twentyFour());
console.log("25. What is the output? :", twentyFive());
console.log("26. What is the value of pie? :", twentySix());
console.log("27. What is the output? :", twentySeven());
console.log("28. What is the output? :", twentyEight());
console.log("29. What is the output? :", twentyNine());
console.log("30. What is the output? :", thirtyOutput());
console.log("31. What is the value of message? :", thirtyOne());
console.log("32. What is the value of matches? :", thirtyTwo());
console.log("%c 33. What is the output? :", errorColor, thirtyThree());
console.log("33. What is the output? :", thirtyFour());
console.log("35. What is the output? :", thirtyFive());

console.log("=====================//=====================");
