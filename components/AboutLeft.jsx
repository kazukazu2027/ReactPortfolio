import React from "react";
import styled from "styled-components";

const AboutLeft = () => {
  return (
    <SAboutLeft>
      <SAboutProfile></SAboutProfile>
    </SAboutLeft>
  );
};

export default AboutLeft;

const SAboutLeft = styled.div`
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const SAboutProfile = styled.div`
  border-radius: 50%;
  background-image: url("/profile02.jpg");
  background-size: cover;
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 20rem;
    height: 20rem;
  }
`;
