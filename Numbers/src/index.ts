import readLineSync from 'readline-sync';

import { Fraction } from './fraction';

const operators = ['+', '-', '*', '/'];

const operationIdx = readLineSync.keyInSelect(operators, 'Which operation? ');
console.log(operators);

if (operationIdx < 0) {
  console.log("You didn't provide an operator.");
  process.exit(0);
}

let operands: string[] = [];

console.log();

while (true) {
  console.log('Enter number. To quit, press Enter.');
  let input = readLineSync.prompt();
  if (!input) break;

  operands.push(input);
}

console.log(operands);

const fraction = new Fraction(operands);
fraction.operate(operators[operationIdx]);
