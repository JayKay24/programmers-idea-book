export enum Operators {
  Addition = '+',
  Subtraction = '-',
  Multiplication = '*',
  Division = '/'
}

export class Fraction {
  private isFraction = (operand: string) => /\d+\/\d+/.test(operand);
  private additionReducer = (accum: number, num: number) => accum + num;

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
        break;
      case Operators.Division:
        break;
      default:
        console.log('Please provide a valid operator e.g [*, /, +, -]');
        process.exit(0);
    }
  }

  add(): string {
    const numerators = this.operands.map((operand) => operand.split('/')[0]);
    const denominators = this.operands.map((operand) => operand.split('/')[1]);

    const LCM = this.getLCM(denominators);

    const summation: number[] = [];

    for (let i = 0; i < numerators.length; i++) {
      let denom = parseInt(denominators[i]);
      let numerator = parseInt(numerators[i]);
      summation.push((LCM / denom) * numerator);
    }

    const numerator = summation.reduce(this.additionReducer, 0);

    return `${numerator}/${LCM}`;
  }

  subtract(): string {
    const numerators = this.operands.map((operand) => operand.split('/')[0]);
    const denominators = this.operands.map((operand) => operand.split('/')[1]);

    const LCM = this.getLCM(denominators);

    const summation: number[] = [];

    for (let i = 0; i < numerators.length; i++) {
      let denom = parseInt(denominators[i]);
      let numerator = parseInt(numerators[i]);
      summation.push((LCM / denom) * numerator);
    }

    const numerator = summation.reduce(
      (accum: number, num: number) => accum - num,
      0
    );

    return `${numerator}/${LCM}`;
  }

  // multiply(): string {}

  // divide(): string {}

  private getLCM(denominators: string[]): number {
    return denominators
      .map((num) => parseInt(num))
      .reduce(this.additionReducer, 1);
  }
}
