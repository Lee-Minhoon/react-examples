import { OPERATORS, Operator } from "../constants/math";

interface UseGetKeypadProps {
  onClickClear: () => void;
  onClickNumber: (number: number) => void;
  onClickOperator: (operator: Operator) => void;
  onClickDot: () => void;
}

export const useGetkeypad = ({
  onClickClear,
  onClickNumber,
  onClickOperator,
  onClickDot,
}: UseGetKeypadProps) => {
  return [
    [
      { label: "AC", onClick: onClickClear },
      { label: "" },
      { label: "%", onClick: () => onClickOperator(OPERATORS.DIVIDE) },
      { label: "÷", onClick: () => onClickOperator(OPERATORS.DIVIDE) },
    ],
    [
      { label: "7", onClick: () => onClickNumber(7) },
      { label: "8", onClick: () => onClickNumber(8) },
      { label: "9", onClick: () => onClickNumber(9) },
      { label: "x", onClick: () => onClickOperator(OPERATORS.MULTIPLY) },
    ],
    [
      { label: "4", onClick: () => onClickNumber(4) },
      { label: "5", onClick: () => onClickNumber(5) },
      { label: "6", onClick: () => onClickNumber(6) },
      { label: "-", onClick: () => onClickOperator(OPERATORS.SUBTRACT) },
    ],
    [
      { label: "1", onClick: () => onClickNumber(1) },
      { label: "2", onClick: () => onClickNumber(2) },
      { label: "3", onClick: () => onClickNumber(3) },
      { label: "+", onClick: () => onClickOperator(OPERATORS.ADD) },
    ],
    [
      { label: "" },
      { label: "0", onClick: () => onClickNumber(0) },
      { label: ".", onClick: onClickDot },
      { label: "=", onClick: () => onClickOperator(OPERATORS.RESULT) },
    ],
  ];
};
