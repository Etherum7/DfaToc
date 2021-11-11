import React, { useState } from "react";
import { isAccepted } from "./acceptor";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const handleClick = () => {
    if (isAccepted(value) === 1) {
      setResult("Accepted");
    } else {
      setResult("Rejected");
    }
  };
  return (
    <div className="App">
      <div className="question">
        Input a string to check whether it is accepted by DFA which accepts
        language L = {"{ "}a<sup>n</sup>b<sup>m</sup>
        {" | n mod 2=0, m≥1 }"}
      </div>

      <input
        type="text"
        value={value}
        className="input"
        onChange={(event) => {
          setValue(event.target.value);
        }}></input>
      <button onClick={() => handleClick()} className="btn">
        CHECK
      </button>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
