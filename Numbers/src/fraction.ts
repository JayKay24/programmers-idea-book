export enum Operators {
  Addition = '+',
  Subtraction = '-',
  Multiplication = '*',
  Division = '/'
}

export class Fraction {
  private isFraction = (operand: string) => /\d+\/\d+/.test(operand);
  private readonly decimalPlaces = 2;

  constructor(private operands: string[]) {
    if (!this.operands.every(this.isFraction)) {
      console.log('Please enter fractions only');
      process.exit(0);
    }
  }

  operate(operator: string) {
    switch (operator) {
      case Operators.Addition:
        console.log(this.add());
        break;
      case Operators.Subtraction:
        console.log(this.subtract());
        break;
      case Operators.Multiplication:
        console.log(this.multiply());
        break;
      case Operators.Division:
        console.log(this.divide());
        break;
      default:
        console.log('Please provide a valid operator e.g [*, /, +, -]');
        process.exit(0);
    }
  }

  add() {
    let result = 0;

    for (const num of this.operands) {
      const [numerator, denominator] = num.split('/');
      result += parseFloat(numerator) / parseFloat(denominator);
    }

    result = this.roundTo(result, this.decimalPlaces);

    return result;
  }

  subtract() {
    let [num, denom] = this.operands[0].split('/');
    let result = parseFloat(num) / parseFloat(denom);

    for (const num of this.operands.slice(1)) {
      const [numerator, denominator] = num.split('/');
      result -= parseFloat(numerator) / parseFloat(denominator);
    }

    result = this.roundTo(result, this.decimalPlaces);

    return result;
  }

  multiply() {
    let result = 1;

    for (const num of this.operands) {
      const [numerator, denominator] = num.split('/');
      result *= parseFloat(numerator) / parseFloat(denominator);
    }

    result = this.roundTo(result, this.decimalPlaces);

    return result;
  }

  divide() {
    let [num, denom] = this.operands[0].split('/');
    let result = parseFloat(num) / parseFloat(denom);

    for (const num of this.operands.slice(1)) {
      const [numerator, denominator] = num.split('/');
      result /= parseFloat(numerator) / parseFloat(denominator);
    }

    result = this.roundTo(result, this.decimalPlaces);

    return result;
  }

  private roundTo(value: number, places: number) {
    let power = Math.pow(10, places);
    return Math.round(value * power) / power;
  }
}
