import React, { useState } from "react";
import styled from "styled-components";
import { useRouteMatch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FormAuthor, Title } from "../components";

export const EditAuthor = () => {
  // recover id param
  const match = useRouteMatch();
  const { params } = match;

  // Find author to edit with id
  const author = useSelector((state) =>
    state.authors.find((author) => author.id === params.id)
  );

  // set Redirection
  const [redirect, setRedirect] = useState(false);

  return (
    <div className="section section-center">
      <Wrapper>
        {redirect && <Redirect from="/editAuthor" to="/" />}
        <Title title="edit new author" />
        <FormAuthor {...author} id={params.id} />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  padding: 2rem;
  background-color: var(--clr-white);
  margin: 2rem auto;
`;
