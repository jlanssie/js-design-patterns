import { IExpression } from './IExpression.interface';
import { NumberExpression } from './NumberExpression.class';
import { ArithmeticOperatorType } from './ArithmeticOperator.enum';

export class ArithmeticExpression implements IExpression {
  private readonly leftNumber: IExpression;
  private readonly operator: ArithmeticOperatorType;
  private readonly rightNumber: IExpression;

  constructor(
    leftNumber: NumberExpression | ArithmeticExpression,
    operator: ArithmeticOperatorType,
    rightNumber: NumberExpression | ArithmeticExpression,
  ) {
    this.leftNumber = leftNumber;
    this.operator = operator;
    this.rightNumber = rightNumber;
  }

  interpret(): number {
    return eval(
      this.leftNumber.interpret() +
        this.operator.toString() +
        this.rightNumber.interpret(),
    );
  }
}
