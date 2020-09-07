import React from "react";
import styled from "styled-components";

import { Title, FormAuthor } from "../components";

export const AddAuthor = () => {
  return (
    <div className="section section-center">
      <Wrapper>
        <Title title="add new author" />
        <FormAuthor />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  padding: 2rem;
  background-color: var(--clr-white);
  margin: 2rem auto;
`;
