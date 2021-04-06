import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyle from '../components/GlobalStyle';
import SkillContent from '../components/SkillContent';
import Head from 'next/head';

const Skills = () => {
    return(
        <div>
            <Head>
                <title>kazuki's portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GlobalStyle />
            <Header />
            <SSkillsContainer>
                <Title title="Skills" />
                <SkillContent />
            </SSkillsContainer>
            <Footer />
        </div>
    );
};

export default Skills;

const SSkillsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;