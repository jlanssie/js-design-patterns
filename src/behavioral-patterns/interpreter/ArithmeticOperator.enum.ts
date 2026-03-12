export const ArithmeticOperator = Object.freeze({
  ADDITION: '+',
  SUBTRACTION: '-',
  MULTIPLICATION: '*',
  DIVISION: '/',
} as const);

export type ArithmeticOperatorType =
  (typeof ArithmeticOperator)[keyof typeof ArithmeticOperator];
