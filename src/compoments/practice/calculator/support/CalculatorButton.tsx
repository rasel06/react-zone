import React, { Children, useState } from "react";

interface Props {
  children?: string;
  operator?: boolean;
  onButtonClick: (item: MouseEvent) => void;
}

const CalculatorButton = ({ children, operator, onButtonClick }: Props) => {
  const [counter, setCounter] = useState(0);

  const styles = {
    buttons: {
      // width: "50px",
      // height: "50px",
      // backgroundColor: "#FA9",
      // display: "grid",
      // justifyItems: "center",
      // alignContent: "center",
      // cursor: "pointer",
    },
  };

  return (
    <>
      <div
        onClick={onButtonClick}
        className={
          operator ? "calc-btn m-2 calc-btn-operator" : "calc-btn m-2 "
        }
        style={styles.buttons}
      >
        {children}
      </div>
    </>
  );
};

export default CalculatorButton;
