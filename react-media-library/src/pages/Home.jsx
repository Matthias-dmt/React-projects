import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Title, AuthorDetail, AuthorsList } from "../components/";
import { firstFetchData } from "../actions/actions-types";

export const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { authors } = state;

  useEffect(() => {
    dispatch(firstFetchData());
  }, []);

  return (
    <FlexWrapper className="section section-center">
      <HomeSection>
        <Title title={"list authors : "} />
        <AuthorsList />
      </HomeSection>
      <HomeSection>
        <Title title={"author details : "} />
        <AuthorDetail />
      </HomeSection>
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    justify-contents: space-between;
  }
`;

const HomeSection = styled.section`
  padding: 2rem;
  background-color: var(--clr-white);
  margin: 2rem 1rem;
  @media screen and (min-width: 992px) {
    width: 50%;
    margin: 0 1rem;
  }
`;
