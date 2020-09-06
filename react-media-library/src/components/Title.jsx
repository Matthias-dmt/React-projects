import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Title = ({ title }) => {
  return <Wrapper>{title}</Wrapper>;
};

const Wrapper = styled.h3`
  text-transform: capitalize;
  letter-spacing: 0.5rem;
`;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
