import { useEffect, useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleAC = () => {
    setInputValue("");
    setResult("");
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
    setInputValue(eval(inputValue));
    setResult("");
  };

  const handleOnClick = (btn) => {
    setInputValue(inputValue + btn);
  };

  useEffect(() => {
    console.log("toggle value", toggle);
    const numbers = inputValue.length > 1 && inputValue.split(/[+\-*/%]/);
    if (
      inputValue.length > 2 &&
      /[0-9]/.test(numbers[numbers.length - 1]) &&
      numbers.length > 1
    ) {
      setResult(eval(inputValue));
    }
  }, [inputValue, toggle]);

  return (
    <div
      className="calculator"
      style={{ backgroundColor: toggle ? "white" : "black" }}
    >
      <div
        className="theme"
        style={{
          backgroundColor: toggle ? "rgb(156, 155, 155)" : "rgb(55, 55, 55)",
        }}
      >
        <button
          onClick={() => setToggle(!toggle)}
          className="toggler"
          style={
            toggle
              ? {
                  backgroundColor: "rgb(55, 55, 55)",
                  transform: "translateX(100%)",
                  color: "white",
                }
              : {
                  backgroundColor: "rgb(156, 155, 155)",
                  transform: "translateX(0)",
                  color: "black",
                }
          }
        >
          {toggle ? "Dark" : "Light"}
        </button>
      </div>
      <div className="screen">
        <input
          type="text"
          className="calculation"
          style={
            toggle
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: "black", color: "white" }
          }
          value={inputValue}
          readOnly
        />
        {/[0-9]/.test(result) && (
          <input
            type="text"
            className="result"
            style={
              toggle
                ? { backgroundColor: "white", color: "black" }
                : { backgroundColor: "black", color: "white" }
            }
            value={result}
            readOnly
          />
        )}
      </div>

      <div className="keys">
        <div className="row">
          <button onClick={handleAC} className="button ash">
            AC
          </button>
          <button onClick={handleDelete} className="button ash">
            DEL
          </button>
          <button onClick={() => handleOnClick("%")} className="button ash">
            %
          </button>
          <button onClick={() => handleOnClick("/")} className="button orange">
            /
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleOnClick("7")} className="button">
            7
          </button>
          <button onClick={() => handleOnClick("8")} className="button">
            8
          </button>
          <button onClick={() => handleOnClick("9")} className="button">
            9
          </button>
          <button onClick={() => handleOnClick("*")} className="button orange">
            *
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleOnClick("4")} className="button">
            4
          </button>
          <button onClick={() => handleOnClick("5")} className="button">
            5
          </button>
          <button onClick={() => handleOnClick("6")} className="button">
            6
          </button>
          <button onClick={() => handleOnClick("-")} className="button orange">
            -
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleOnClick("1")} className="button">
            1
          </button>
          <button onClick={() => handleOnClick("2")} className="button">
            2
          </button>
          <button onClick={() => handleOnClick("3")} className="button">
            3
          </button>
          <button onClick={() => handleOnClick("+")} className="button orange">
            +
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleOnClick("0")} className="zero-button">
            0
          </button>
          <button onClick={() => handleOnClick(".")} className="button">
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
