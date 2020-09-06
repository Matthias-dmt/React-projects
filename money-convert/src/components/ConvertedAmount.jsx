import React, { useContext } from "react";

import { FixerContext } from "../context/context.jsx";

export const ConvertedAmount = () => {
  const { amountConverted, currentSymbol } = useContext(FixerContext);

  return (
    <div>
      {amountConverted !== "" && parseInt(amountConverted).toFixed(2)}{" "}
      {currentSymbol}
    </div>
  );
};
