import Head from 'next/head';
import styled from 'styled-components';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import GlobalStyle from '../components/GlobalStyle';
import HomeList from '../components/HomeList';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>kazuki's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SBody>
        <Header />
        <SContainer>
          <SHomeContent>
            <SHomeLeft>
              <STitle>
                Welcome to kazuki's portfolio
              </STitle>
              <SLead>
                Thank you for visiting the Website.
              </SLead>
            </SHomeLeft>
            <HomeList />
          </SHomeContent>
        </SContainer>
        <Footer />
      </SBody>
    </>


  )
}

const SBody = styled.div`
  background-color: #f1f1f1;
  padding: 0;
  margin: 0;
  height: 100vh;
`;

const SContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`
const SHomeContent = styled.div`
  display: flex;
  @media(max-width: 600px){
    display: block;
  }
`;

const SHomeLeft = styled.div`
  width: 50%;
  padding-top: 20rem;
  @media(max-width: 600px){
    width: 100%;
    padding-top: 6rem;
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
  @media(max-width: 600px){
    padding: 3rem 0;
  }
`;