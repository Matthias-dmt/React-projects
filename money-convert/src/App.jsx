import React from "react";
import { FormConvert, ConvertedAmount } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Currency converter</h1>
      <FormConvert />
      <ConvertedAmount />
    </div>
  );
}

export default App;
