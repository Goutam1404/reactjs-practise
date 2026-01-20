import React, { use } from "react";
import { useState } from "react";
import "./App.css";
const App = () => {
  // let value=5
  let [value, setValue] = useState(0);
  let [userValue, setuserValue]=useState(0);
  function addVal() {
    value = value + 1;
    if (value > 10) value -= 10;
    setValue(value);
  }
  function decreaseVal() {
    value = value - 1;
    if (value < 0) {
      value = 0;
    }
    setValue(value);
  }
  function toZero() {
    value = 0;
    setValue(value);
  }
 
  return (
    <div>
      <h1>Counter variable</h1>
      <h2>Counter:{value}</h2>
      <div>
        <button onClick={addVal}>Add value +1</button>
        &nbsp; &nbsp;
        <button onClick={decreaseVal}>subtract value -1</button>
        &nbsp; &nbsp;
        <button onClick={() => setValue(0)}>Intialize to 0</button>
      </div>
      <div style={{ margin: "20px 0" }}>
        <input
          type="number"
          style={{ margin: "0 5px", padding: "5px" }}
          value={userValue}
          onChange={(e) => setuserValue(Number(e.target.value))}
          placeholder="Enter the value"
        />
        <button style={{ font: "bold" }} onClick={()=> {
          setValue(userValue);
          setuserValue(0);
          }}>
          set {userValue}
        </button>
      </div>
    </div>
  );
};

export default App;
