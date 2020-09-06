import React, { useState, useContext } from "react";

import { Currency, InputAmount } from "./";

import { FixerContext } from "../context/context.jsx";

import styled from "styled-components";

export const FormConvert = () => {
  const { convertAmount } = useContext(FixerContext);

  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    convertAmount(amount, currency);
  };

  return (
    <section className="section-center">
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <InputAmount setAmount={setAmount} amount={amount} />
          <Currency setCurrency={setCurrency} currency={currency} />
          <button>Enter</button>
        </form>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  form {
    background-color: #eeeeee;
    padding: 2rem 1rem;
  }
`;
