import { ArithmeticExpression } from '../../src/behavioral-patterns/interpreter/ArithmeticExpression.class';
import { ArithmeticOperator } from '../../src/behavioral-patterns/interpreter/ArithmeticOperator.enum';
import { NumberExpression } from '../../src/behavioral-patterns/interpreter/NumberExpression.class';

describe('Interpreter', () => {
  test('An Interpreter can interpret a simple language, that consists of simple expressions', () => {
    const leftNumber = new NumberExpression(1);
    const rightNumber = new NumberExpression(11);

    const addition = new ArithmeticExpression(
      leftNumber,
      ArithmeticOperator.ADDITION,
      rightNumber,
    );
    expect(addition.interpret()).toBe(12);

    const subtraction = new ArithmeticExpression(
      leftNumber,
      ArithmeticOperator.SUBTRACTION,
      rightNumber,
    );
    expect(subtraction.interpret()).toBe(-10);

    const multiplication = new ArithmeticExpression(
      leftNumber,
      ArithmeticOperator.MULTIPLICATION,
      rightNumber,
    );
    expect(multiplication.interpret()).toBe(11);

    const division = new ArithmeticExpression(
      leftNumber,
      ArithmeticOperator.DIVISION,
      rightNumber,
    );
    expect(division.interpret()).toBe(1 / 11);

    const math = new ArithmeticExpression(
      new ArithmeticExpression(
        addition,
        ArithmeticOperator.ADDITION,
        subtraction,
      ),
      ArithmeticOperator.ADDITION,
      new ArithmeticExpression(
        multiplication,
        ArithmeticOperator.ADDITION,
        division,
      ),
    );
    expect(math.interpret()).toBe(12 + -10 + (11 + 1 / 11));
  });
});
