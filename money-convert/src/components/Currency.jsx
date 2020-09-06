import React, { useState } from "react";

import { FixerContext } from "../context/context.jsx";
import { useContext } from "react";

export const Currency = ({ setCurrency }) => {
  const { rates, symbols } = useContext(FixerContext);
  const currencies = [...rates.keys()];

  //console.log(currencies);
  return (
    <div>
      <label htmlFor="currency">choose a currency : </label>

      <select
        onChange={(e) => setCurrency(e.target.value)}
        name="currency"
        id="currency"
      >
        {currencies.length > 0 &&
          currencies.map((currency, i) => {
            return (
              <option key={i} value={currency}>
                {currency} : {symbols.get(currency)}
              </option>
            );
          })}
      </select>
    </div>
  );
};
