import readLineSync from 'readline-sync';

import { Fraction } from './fraction';

const operators = ['+', '-', '*', '/'];

const operationIdx = readLineSync.keyInSelect(operators, 'Which operation? ');

if (operationIdx < 0) {
  console.log("You didn't provide an operator.");
  process.exit(0);
}

const operands: string[] = [];

const isFraction = (operand: string) => /\d+\/\d+/.test(operand);

let input: string;

do {
  console.log('Enter fraction. To finish, press q and enter.');
  input = readLineSync.prompt();
  if (['q', 'Q'].includes(input)) {
    break;
  } else if (!isFraction(input)) {
    console.log('Please enter fractions only');
  } else {
    operands.push(input);
  }
} while (input);

const fraction = new Fraction(operands);
fraction.operate(operators[operationIdx]);
