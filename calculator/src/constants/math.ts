export const OPERATORS = {
  ADD: "+",
  SUBTRACT: "-",
  MULTIPLY: "x",
  DIVIDE: "÷",
  REMAINDER: "%",
  RESULT: "=",
};

export type Operator = (typeof OPERATORS)[keyof typeof OPERATORS];
