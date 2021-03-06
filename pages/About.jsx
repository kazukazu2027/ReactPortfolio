import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyle";
import AboutLeft from "../components/AboutLeft";
import AboutRight from "../components/AboutRight";

const About = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SAboutContainer>
        <Title title="About" />
        <SAboutMain>
          <AboutLeft />
          <AboutRight />
        </SAboutMain>
      </SAboutContainer>
      <Footer />
    </>
  );
};

export default About;

const SAboutMain = styled.div`
  display: flex;
  height: 66.6vh;
  @media (max-width: 800px) {
    display: block;
  }
`;

const SAboutContainer = styled.div`
    width: 80%;
    margin 0 auto;
    @media (max-width: 800px) {
      display: block;
      padding-bottom: 6rem;
    }
`;
