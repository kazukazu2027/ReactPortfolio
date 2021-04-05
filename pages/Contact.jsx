import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Title from '../components/Title'
import Header from '../components/header'
import Footer from '../components/footer'
import GlobalStyle from '../components/GlobalStyle'
import SNS from '../components/SNS'

const Contact = () => {
    return(
        <>
            <GlobalStyle />
            <Header />
            <SContactContainer>
                <Title title="Contact" />
                <SSnsContent>
                    <SNS snsTitle="GitHub" snsImg="GitHub.png" snsUrl="https://github.com/kazukazu2027" />
                    <SNS snsTitle="Twitter" snsImg="Twitter.png" snsUrl="https://twitter.com/kazukazu2027" />
                    <SMail>
                        <SMailTitle>MailAddress</SMailTitle>
                        <SMailAddress>kazu.en.0207@gmail.com</SMailAddress>
                    </SMail>
                </SSnsContent>
                <SSnsText>お気軽にご連絡ください！！</SSnsText>
            </SContactContainer>

            <Footer />
        </>
    )
}

export default Contact;

const SContactContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    
`;

const SSnsContent = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const SMail = styled.p`
    
`;

const SMailTitle = styled.h2`
    font-size: 3rem;
`;

const SMailAddress = styled.p`
    font-size: 3rem;
`;

const SSnsText = styled.p`
    font-size: 3rem;
    padding-top: 6rem;
    text-align: center;
`;