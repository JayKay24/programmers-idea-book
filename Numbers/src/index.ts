import readLineSync from 'readline-sync';

import { Fraction } from './fraction';

const operators = ['+', '-', '*', '/'];

const operationIdx = readLineSync.keyInSelect(operators, 'Which operation? ');

if (operationIdx < 0) {
  console.log("You didn't provide an operator.");
  process.exit(0);
}

const operands: string[] = [];

let input: string;

do {
  console.log('Enter number. To quit, press Enter.');
  input = readLineSync.prompt();
  if (!input) break;

  operands.push(input);
} while (input);

const fraction = new Fraction(operands);
fraction.operate(operators[operationIdx]);
