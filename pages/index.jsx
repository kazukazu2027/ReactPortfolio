import styled from "styled-components";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyle";
import HomeList from "../components/HomeList";

export default function Home() {
  return (
    <SDiv>
      <GlobalStyle />

      <SBody>
        <Header />
        <SContainer>
          <SHomeContent>
            <SHomeLeft>
              <STitle>Welcome to kazuki's portfolio</STitle>
              <SLead>Thank you for visiting the Website.</SLead>
            </SHomeLeft>
            <HomeList />
          </SHomeContent>
        </SContainer>
        <Footer />
      </SBody>
    </SDiv>
  );
}

const SDiv = styled.div`
position: relative；
min-height: 100vh;
box-sizing: border-box;
`;

const SBody = styled.div`
  background-color: #f1f1f1;
  padding: 0;
  margin: 0;
  position: relative；
  min-height: 100vh;
  box-sizing: border-box;
`;

const SContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 4rem;
  @media (max-width: 425px) {
    padding-bottom: 8rem;
  }
`;

const SHomeContent = styled.div`
  display: flex;
  padding-top: 10rem;
  @media (max-width: 768px) {
    padding-top: 3rem;
  }
  @media (max-width: 600px) {
    display: block;
  }
`;

const SHomeLeft = styled.div`
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const STitle = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 6rem;
`;

const SLead = styled.p`
  font-size: 3.5rem;
  padding-top: 7rem;
  @media (max-width: 768px) {
    padding-top: 3rem;
  }
  @media (max-width: 600px) {
    padding: 3rem 0;
  }
`;
