import React, { useState, useEffect } from "react";

const key = "b52a6dd999063d156398288d36456a0b";
const rootUrl = "http://data.fixer.io/api/";

const FixerContext = React.createContext();
const FixerProvider = ({ children }) => {
  const [error, setError] = useState({ show: false, msg: "" });
  const [rates, setRates] = useState(new Map());
  const [symbols, setSymbols] = useState(new Map());
  const [amountConverted, setAmountConverted] = useState("");
  const [currentSymbol, setCurrentSymbol] = useState("");

  const getRates = () => {
    fetch(`${rootUrl}latest?access_key=${key}`)
      .then((data) => {
        //console.log(data);

        return data.json();
      })
      .then(({ success, rates }) => {
        if (success) {
          const defaultRates = new Map();

          for (const rate in rates) {
            defaultRates.set(rate, rates[rate]);
          }
          //console.log(defaultRates);

          setRates(defaultRates);
        }
      });
  };

  const getSymbols = () => {
    fetch(`${rootUrl}symbols?access_key=${key}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data.success) {
          const defaultSymbols = new Map();

          for (const symbol in data.symbols) {
            defaultSymbols.set(symbol, data.symbols[symbol]);
          }
          //console.log(defaultRates);

          setSymbols(defaultSymbols);
        }
      });
  };

  const convertAmount = (amount, currency) => {
    const rate = rates.get(currency);
    const symbol = symbols.get(currency);

    const amountConverted = amount * rate;

    setCurrentSymbol(symbol);
    setAmountConverted(amountConverted);
  };

  // error
  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  useEffect(() => {
    getRates();
    getSymbols();
  }, []);

  return (
    <FixerContext.Provider
      value={{
        error,
        toggleError,
        rates,
        convertAmount,
        amountConverted,
        currentSymbol,
        symbols,
      }}
    >
      {children}
    </FixerContext.Provider>
  );
};
export { FixerProvider, FixerContext };
