interface KeypadProps {
  keypad: { label: string; onClick?: () => void }[][];
}

const Keypad = ({ keypad }: KeypadProps) => {
  return (
    <div>
      {keypad.map((row, rowIdx) => (
        <div key={rowIdx} style={{ display: "flex" }}>
          {row.map((column, columnIdx) => (
            <div key={columnIdx} style={{ width: "10rem", height: "10rem" }}>
              <button
                onClick={column?.onClick}
                disabled={!column?.onClick}
                style={{ width: "100%", height: "100%", fontSize: "3rem" }}
              >
                {column.label}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keypad;
