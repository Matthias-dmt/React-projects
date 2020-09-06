import React from "react";
import { isEmpty } from "lodash";
import styled from "styled-components";

import { useSelector } from "react-redux";

export const AuthorDetail = () => {
  const authorDetails = useSelector((state) => state.authorDetails);

  const { name, bio, shop_name, books } = authorDetails;

  const isEmptyDetails = isEmpty(authorDetails);

  return (
    <>
      {!isEmptyDetails && (
        <Wrapper>
          <h4>name : {name}</h4>
          <div>
            <p>
              <span>biography : </span>
              {bio}
            </p>
            <p>
              <span>shop name : </span>
              {shop_name}
            </p>
            <ul>
              <p>book list :</p>
              {books.length > 0 &&
                books.map((book, i) => {
                  return <li key={i}>{book}</li>;
                })}
            </ul>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.article`
  h4 {
    margin: 2rem 0 1.3rem;
  }

  div {
    margin-left: 1rem;
  }

  p {
    margin-bottom: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
  }

  p span {
    margin-right: 0.5rem;
  }

  ul li {
    margin-left: 1.5rem;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1rem;
  }
`;
