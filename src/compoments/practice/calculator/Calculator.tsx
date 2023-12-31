import React, { useRef } from "react";
import CalculatorButton from "./support/CalculatorButton";

const Calculator = () => {
  const styles = {
    calculator: {
      width: "25vw",
      height: "70vh",
      backgroundColor: "#555",
      display: "grid",
    },
    display: {
      margin: "10px",
      border: "0",
      fontSize: "2.5em",
      width: "95%",
    },
    kepads: {
      borderTop: "solid 2px #A6A6A6",
      display: "grid",
      justifyItems: "center",
      alignContent: "center",
      gridTemplateColumns: "auto auto auto auto",
      cursor: "pointer",
    },
  };

  const keyList = [
    { value: "7", operator: false, operation: "append" },
    { value: "8", operator: false, operation: "append" },
    { value: "9", operator: false, operation: "append" },
    { value: "+", operator: true, operation: "append" },
    { value: "4", operator: false, operation: "append" },
    { value: "5", operator: false, operation: "append" },
    { value: "6", operator: false, operation: "append" },
    { value: "-", operator: true, operation: "append" },
    { value: "1", operator: false, operation: "append" },
    { value: "2", operator: false, operation: "append" },
    { value: "3", operator: false, operation: "append" },
    { value: "*", operator: true, operation: "append" },
    { value: "C", operator: false, operation: "clear" },
    { value: "0", operator: false, operation: "append" },
    { value: "=", operator: false, operation: "calc" },
    { value: "/", operator: true, operation: "append" },
  ];

  //   const displayRef = useRef(null);
  const displayRef = useRef<HTMLInputElement | null>(null);

  const fullCalculator = (operation: string, key: string) => {
    switch (operation) {
      case "append":
        if (displayRef.current != null) {
          if (displayRef.current.value == "Error") {
            displayRef.current.value = "";
          }
          displayRef.current.value += key;
        }
        break;
      case "calc":
        if (displayRef.current != null) {
          try {
            displayRef.current.value =
              displayRef.current.value != ""
                ? eval(displayRef.current.value)
                : "";
          } catch (error) {
            displayRef.current.value = "Error";
          }
        }
        break;
      case "clear":
        if (displayRef.current != null) {
          displayRef.current.value = "";
        }
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.calculator}>
      <input ref={displayRef} style={styles.display} type="text" />

      <div style={styles.kepads}>
        {keyList.map((key) => {
          return (
            <CalculatorButton
              onButtonClick={() => {
                fullCalculator(key.operation, key.value);
              }}
              operator={isNaN(Number(key.value))}
              key={key.value.toString()}
            >
              {key.value}
            </CalculatorButton>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
