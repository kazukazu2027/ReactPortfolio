import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyle";
import AboutLeft from "../components/AboutLeft";
import AboutRight from "../components/AboutRight";
import Head from "next/head";

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
  @media (max-width: 800px) {
    display: block;
  }
`;

const SAboutContainer = styled.div`
    width: 80%;
    margin 0 auto;
`;
