import { IExpression } from './IExpression.interface';

export class NumberExpression implements IExpression {
  private readonly number: number;

  constructor(number: number) {
    this.number = number;
  }

  interpret(): number {
    return this.number;
  }
}
