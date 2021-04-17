import React from "react";
import styled from "styled-components";

const Title = (props) => {
  return <STitle>{props.title}</STitle>;
};

export default Title;

const STitle = styled.h1`
  font-size: 4rem;
  padding: 1rem 2rem;
  border-left: 4px solid #000;
`;
