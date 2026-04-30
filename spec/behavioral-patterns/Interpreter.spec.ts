import { ArithmeticExpression } from '../../src/behavioral-patterns/interpreter/ArithmeticExpression.class';
import { ArithmeticOperator } from '../../src/behavioral-patterns/interpreter/ArithmeticOperator.enum';
import { NumberExpression } from '../../src/behavioral-patterns/interpreter/NumberExpression.class';

describe('Interpreter', () => {
  test('Interpreter should define a representational grammar for a language and use an interpret operation to evaluate expressions within that grammar.', () => {
    // Terminal Expressions (NumberExpression) represent the basic symbols of the grammar
    const leftNumber = new NumberExpression(1);
    const rightNumber = new NumberExpression(11);

    // Non-terminal Expressions (ArithmeticExpression) implement the grammar rules for combining symbols
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

    // The pattern allows for building complex Abstract Syntax Trees (ASTs) by nesting expressions
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
