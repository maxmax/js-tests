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
  thirtyFive,
  promiseRes,
  intRes} from "./tests";

import {foo} from "./tests/foo";

const resultColor = "background: green; color: white"
const errorColor = "background: red; color: white"

const questions = [
  { title: '1. What is the value?', code: square, result: square(11) },
  { title: '2. What is the value?', code: resultValue, result: resultValue() },
  { title: '3. What is the value of result?', code: counterThree, result: counterThree() },
  { title: '4. What is the output?', code: isOutput, result: isOutput() },
  { title: '5. What is the output?', code: whatOutput, result: whatOutput() },
  { title: '6. What is the value of a, b?', code: whatValue, result: whatValue(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']) },
  { title: '7. What is the value of result?', code: sevenValue, result: sevenValue() },
  { title: '8. What is the value of result?', code: eightValue, result: eightValue() },
  { title: '9. What should the toString function be?  to print "I Amory Blaine am 102 years old."', code: shouldToString, result: shouldToString() },
  { title: '10. What is the value of result? :', code: whatIs, result: whatIs() },
  { title: '11. What is the output? :', code: whatIsOutput, result: whatIsOutput() },
  { title: '12. What is the value of result?', code: twelveResult, result: twelveResult() },
  { title: '13. What is the value of child.b after this piece of code is executed?', code: whatExecuted, result: whatExecuted() + " b3, c4" },
  { title: '14. What is the output?', code: fourteenOutput, result: fourteenOutput() },
  { title: '15. What is the output?', code: fifteenOutput, result: fifteenOutput() },
  { title: '16. What is the output?', code: sixteenOutput, result: sixteenOutput() },
  { title: '17. Complete the implementation of this method so that it returns the sum of its arguments. **', code: sumArguments, result: sumArguments(1,2,3,4) },
  { title: '17.2 sumArgumentsSecond. **', code: sumArgumentsSecond, result: sumArgumentsSecond(0,1,2,3,4) },
  { title: '18. What is the value of result?', code: eighteenth, result: eighteenth() },
  { title: '19. What is the value of result?', code: nineteenth, result: nineteenth() },
  { title: '20. What is the output?', code: twentieth, result: twentieth() },
  { title: '21. What is the value of results?', code: twentyOne, result: twentyOne() },
  { title: '22. What is the output?', code: twentyTwo, result: twentyTwo() },
  { title: '23. What is the output?', code: twentyThree, result: twentyThree() },
  { title: '24. What is the output?', code: twentyFour, result: twentyFour() },
  { title: '25. What is the output?', code: twentyFive, result: twentyFive() },
  { title: '26. What is the value of pie?', code: twentySix, result: twentySix() },
  { title: '27. What is the output?', code: twentySeven, result: twentySeven() },
  { title: '28. What is the output?', code: twentyEight, result: twentyEight() },
  { title: '29. What is the output?', code: twentyNine, result: twentyNine() },
  { title: '30. What is the output?', code: thirtyOutput, result: thirtyOutput() },
  { title: '31. What is the value of message?', code: thirtyOne, result: thirtyOne() },
  { title: '32. What is the value of matches?', code: thirtyTwo, result: thirtyTwo() },
  { title: '33. What is the output?', code: thirtyThree, result: thirtyThree() },
  { title: '34. What is the output?', code: thirtyFour, result: thirtyFour() },
  { title: '35. What is the output?', code: thirtyFive, result: thirtyFive() },
  { title: '36. What is the result?', code: promiseRes, result: promiseRes() },
  { title: '37. What is the result?', code: intRes }
];

var a_arr = foo(questions)

const marfooter = `
  <section id="output">
    <h2>37. What is the result? tmp</h2>
    <button class="primary" role="button" data-role="see">Action</button>
  </section>
`;

function component() {
  var element = document.createElement('section');
  element.innerHTML = _.join(['<h1>JS base</h1>', a_arr, marfooter], ' ');
  return element;
}
document.body.appendChild(component());

intRes();

//results
console.log("%c 13. What is the value of child.b after this piece of code is executed?", resultColor, whatExecuted());
console.log("%c 17. Complete the implementation of this method so that it returns the sum of its arguments. :", resultColor, sumArguments(1,2,3,4));
console.log("%c 17.2 sumArgumentsSecond. :", resultColor, sumArgumentsSecond(0,1,2,3,4));
console.log("%c 20. What is the output? :", errorColor, twentieth());
console.log("%c 33. What is the output? :", errorColor, thirtyThree());
console.log("=====================//=====================");
