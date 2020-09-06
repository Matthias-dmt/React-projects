import React, { useState, useEffect, useContext } from "react";
import { FixerContext } from "../context/context.jsx";

export const InputAmount = ({ amount, setAmount }) => {
  const { error, toggleError } = useContext(FixerContext);

  const reg = new RegExp("^\\d+$");
  //const reg = new RegExp("^[0-9],.");

  return (
    <div>
      {error && <p>{error.msg}</p>}
      <label htmlFor="amount">amount (EUR): </label>
      <input
        onChange={(e) => {
          if (reg.test(e.target.value)) {
            setAmount(e.target.value);
            toggleError(false, "");
          } else toggleError(true, "you can only write numbers");
        }}
        value={amount}
        type="text"
        name="amount"
        id="amount"
      />
    </div>
  );
};
