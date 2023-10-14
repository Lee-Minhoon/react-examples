import { useCallback, useMemo, useState } from "react";
import { Nullable } from "./types/common";
import { OPERATORS, Operator } from "./constants/math";
import { getDecimalDigit, operate } from "./utilities/math";
import { useGetkeypad } from "./hooks/useGetKeypad";
import Keypad from "./components/Keypad";

function App() {
  const [result, setResult] = useState(0);
  const [number, setNumber] = useState<Nullable<number>>(null);
  const [operator, setOperator] = useState<Nullable<Operator>>(null);
  const [dot, setDot] = useState(false);
  const [decimalDigit, setDecimalDigit] = useState(0);

  /**
   * 새로운 숫자를 세팅하는 함수, 기존 숫자가 정수냐, 소수냐에 따라 새로운 숫자가 바뀐다.
   * 소수점이 클릭되어 있다면, 소수점 자리수를 늘린다.
   */
  const setNewNumber = useCallback(
    (prevNumber: number, currNumber: number) => {
      if (Number.isInteger(prevNumber)) {
        // 정수라면...
        if (dot) {
          // 소수점이 클릭되어 있다면...
          setDot(false);
          return prevNumber + currNumber / 10;
        }
        return prevNumber * 10 + currNumber;
      } else {
        // 소수라면...
        const digit = getDecimalDigit(prevNumber);
        const newNumber = prevNumber + currNumber / Math.pow(10, digit + 1);
        return +newNumber.toFixed(digit + 1);
      }
    },
    [dot]
  );

  /**
   * 숫자를 누르면, 결과 또는 연산할 숫자가 설정된다.
   * @param newNumber 눌려진 숫자
   */
  const onClickNumber = (newNumber: number) => {
    if (!operator) {
      // Operator가 없으면 바로 Result를 설정한다.
      setResult((prev) => setNewNumber(prev, newNumber));
    } else {
      // Operator가 있으면, Number를 설정한다.
      setNumber((prev) => setNewNumber(prev ?? 0, newNumber));
    }
  };

  /**
   * 연산자를 누르면 실행되는 함수
   * @param newOperator 새로운 Operator
   */
  const onClickOperator = (newOperator: Operator) => {
    if (number !== null && operator) {
      // Operator와 Number가 존재하는데, 새로운 Operator가 들어오면 계산을 해야한다.
      setResult(+operate(operator, result, number).toFixed(10));
      setNumber(null);
      setOperator(null);
    }
    // Operator가 Result가 아니라면, 새로운 Operator를 설정한다.
    if (newOperator !== OPERATORS.RESULT) {
      setOperator(newOperator);
    }
  };

  /**
   * AC를 누르면, 모든 값이 초기화된다.
   */
  const onClickClear = useCallback(() => {
    setResult(0);
    setNumber(null);
    setOperator(null);
  }, []);

  const string = useMemo(() => {
    return `${result}${operator ?? ""}${number ?? ""}${dot ? "." : ""}`;
  }, [dot, number, operator, result]);

  const keypad = useGetkeypad({
    onClickClear,
    onClickNumber,
    onClickOperator,
    onClickDot: () => setDot(true),
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "40rem",
      }}
    >
      <button
        style={{
          display: "flex",
          color: "black",
          fontSize: "3rem",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
        onClick={() => alert(`현재 값은 ${result} 입니다`)}
      >
        {string}
      </button>
      <Keypad keypad={keypad} />
      <div style={{ fontSize: "2rem" }}>
        <div>{`현재 Result : ${result}`}</div>
        <div>{`현재 Number : ${number}`}</div>
        <div>{`현재 Operator : ${operator}`}</div>
        <div>{`현재 Dot : ${dot ? "True" : "False"}`}</div>
        <div>{`현재 Decimal Digit : ${decimalDigit}`}</div>
      </div>
    </div>
  );
}

export default App;
