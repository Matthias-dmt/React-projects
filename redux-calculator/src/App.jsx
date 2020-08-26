import React from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { firstParam, secondParam, result } = useSelector((state) => state);
  console.log(useSelector((state) => state));

  return (
    <div className="App">
      <div>
        <label htmlFor="firstParam">firstParam : </label>
        <input
          onChange={(e) => dispatch({ type: "handleChange", target: e.target })}
          type="text"
          name="firstParam"
          value={firstParam}
        />
        <label htmlFor="secondParam">secondParam : </label>
        <input
          onChange={(e) => dispatch({ type: "handleChange", target: e.target })}
          type="text"
          name="secondParam"
          value={secondParam}
        />
      </div>
      <div>
        <button onClick={() => dispatch({ type: "ADDITION" })}>Add</button>
        <button onClick={() => dispatch({ type: "MULTIPLICATION" })}>
          Mult
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
      <div>
        <h4>Résultat</h4>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
