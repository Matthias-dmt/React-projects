import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Wrapper
      className="btn"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background: transparent;
  border: transparent;
  font-size: 0.8rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  cursor: pointer;
`;
