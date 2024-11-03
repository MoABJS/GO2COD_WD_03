import { useEffect, useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  // const [result, setResult] = useState(0);

  const handleAC = () => {
    setInputValue("");
  };

  const handleDelete = () => {
    if (inputValue.length > 0) {
      const inputValueArray = inputValue.split("");
      inputValueArray.pop();
      setInputValue(inputValueArray.join(""));
    } else {
      setInputValue("");
    }
  };

  const handleEqualTo = () => {
    const numbers = inputValue.split(/[+\-*/%]/).map((num) => Number(num));
    const operators = inputValue.replace(/[0-9]|\./g, "").split("");
    console.log("numbers", numbers);
    console.log("operators", operators);
    let tempResult = numbers[0];
    for (let i = 0; i < operators.length; i++) {
      let nextNumber = numbers[i + 1];
      switch (operators[i]) {
        case "%":
          tempResult = tempResult % nextNumber;
          break;
        case "/":
          tempResult /= nextNumber;
          break;
        case "*":
          tempResult *= nextNumber;
          break;
        case "-":
          tempResult -= nextNumber;
          break;
        case "+":
          tempResult += nextNumber;
          break;
        default:
          break;
      }
    }
    console.log("temp result", tempResult);
    setInputValue(tempResult);
  };

  const handleNumberInput = (num) => {
    setInputValue(inputValue + num);
  };

  const handleOperatorInput = (opr) => {
    setInputValue(inputValue + opr);
  };

  useEffect(() => {
    console.log("input value", inputValue);
    console.log("input value length", inputValue.length);
  }, [inputValue]);

  return (
    <div className="calculator">
      <input type="text" className="screen" value={inputValue} readOnly />
      <div className="keys">
        <div className="row">
          <button onClick={handleAC} className="button ash">
            AC
          </button>
          <button onClick={handleDelete} className="button ash">
            DEL
          </button>
          <button
            onClick={() => setInputValue(inputValue + "%")}
            className="button ash"
          >
            %
          </button>
          <button
            onClick={() => handleOperatorInput("/")}
            className="button orange"
          >
            /
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberInput("7")} className="button">
            7
          </button>
          <button onClick={() => handleNumberInput("8")} className="button">
            8
          </button>
          <button onClick={() => handleNumberInput("9")} className="button">
            9
          </button>
          <button
            onClick={() => handleOperatorInput("*")}
            className="button orange"
          >
            *
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberInput("4")} className="button">
            4
          </button>
          <button onClick={() => handleNumberInput("5")} className="button">
            5
          </button>
          <button onClick={() => handleNumberInput("6")} className="button">
            6
          </button>
          <button
            onClick={() => handleOperatorInput("-")}
            className="button orange"
          >
            -
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberInput("1")} className="button">
            1
          </button>
          <button onClick={() => handleNumberInput("2")} className="button">
            2
          </button>
          <button onClick={() => handleNumberInput("3")} className="button">
            3
          </button>
          <button
            onClick={() => handleOperatorInput("+")}
            className="button orange"
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            onClick={() => handleNumberInput("0")}
            className="zero-button"
          >
            0
          </button>
          <button onClick={() => handleNumberInput(".")} className="button">
            .
          </button>
          <button onClick={handleEqualTo} className="button orange">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
