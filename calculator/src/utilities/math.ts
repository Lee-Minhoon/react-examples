import { OPERATORS, Operator } from "../constants/math";

/**
 * 연산을 실행하는 함수
 * @param operator 연산할 연산자
 * @param a 숫자 1
 * @param b 숫자 2
 * @returns 연산 결과
 */
export const operate = (operator: Operator, a: number, b: number) => {
  switch (operator) {
    case OPERATORS.ADD:
      return a + b;
    case OPERATORS.SUBTRACT:
      return a - b;
    case OPERATORS.MULTIPLY:
      return a * b;
    case OPERATORS.DIVIDE:
      return a / b;
    case OPERATORS.REMAINDER:
      return a % b;
    default:
      return 0;
  }
};

/**
 * 소수점 자리수를 구하는 함수
 * @param number 소수점 자리수를 구할 숫자
 * @returns 소수점 자리수
 */
export const getDecimalDigit = (number: number) => {
  const string = number.toString();
  const dotIndex = string.indexOf(".");
  if (dotIndex === -1) {
    return 0;
  }
  return string.length - dotIndex - 1;
};
