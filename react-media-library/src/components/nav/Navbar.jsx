import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./LoginButton.jsx";
import { LogoutButton } from "./LogoutButton.jsx";

const Nav = () => {
  const { isAuthenticated, user } = useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <WrapperNav>
      <section className="navLink">
        <Link to="/">Home</Link>
        {isAuthenticated && <Link to="/addAuthor">add author</Link>}
      </section>
      <WrapperGrid>
        {user && user.picture && <img src={user.picture} alt={user.name} />}
        {user && user.name && (
          <h4>
            Welcome, <strong>{user.name.toUpperCase()}</strong>
          </h4>
        )}

        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </WrapperGrid>
    </WrapperNav>
  );
};

export const Navbar = withRouter(Nav);

const WrapperNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--clr-white);
  margin-bottom: 1rem;
  padding: 1.5rem;
  .navLink {
    width: 70%;
  }
  .navLink a {
    padding: 0.5rem 1.5rem;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
  }
  @media screen and (min-width: 992px) {
    .navLink a {
      padding: 1rem;

      font-size: 1.2rem;
    }
  }
`;

const WrapperGrid = styled.section`
  text-align: center;
  display: grid;
  grid-template-columns: 100px;
  justify-content: right;
  align-items: center;
  gap: 1.5rem;

  img,
  h4 {
    display: none;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: auto auto 100px;

    img,
    h4 {
      display: inline-block;
    }
    h4 {
      margin-bottom: 0;
      font-weight: 400;
    }
    img {
      width: 35px !important;
      height: 35px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  button {
    background: transparent;
    border: transparent;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;
