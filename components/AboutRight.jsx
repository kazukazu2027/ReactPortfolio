import React from 'react';
import styled from 'styled-components';

const AboutRight = () => {
    return(
        <SAboutRight>
            <SName>小野 和聖</SName>
            <SIntroductionContainer>
                <SIntroduction>2020年9月からプログラミング学習を始めました！現在明治大学在学中です。</SIntroduction>
            </SIntroductionContainer>
            <STable>
                <tr>
                    <td>居住地</td>
                    <SSecondTd>東京都江東区</SSecondTd>
                </tr>
                <tr>
                    <td>生年月日</td>
                    <SSecondTd>2000年2月7日</SSecondTd>
                </tr>
                <tr>
                    <td>趣味</td>
                    <SSecondTd>フットサル、サッカー観戦</SSecondTd>
                </tr>
            </STable>
        </SAboutRight>
    );
};

export default AboutRight;

const SAboutRight = styled.div`
    width: 40%;
    @media(max-width: 800px) {
        width: 80%;
        margin: 0 auto;
    }
    @media(max-width: 600px) {
        margin-bottom: 4rem;
    }
    @media(max-width: 450px) {
        width: 80%;
        margin: 0 auto;
    }
`;

const SName = styled.h1`
    font-size: 5rem;
    @media(max-width: 700px) {
        text-align: center;
    }
    @media(max-width: 450px) {
        font-size: 4rem;
    }
`;

const SIntroductionContainer = styled.div`
    word-break: initial;
`;

const SIntroduction = styled.p`
    font-size: 3rem;
    width: 100%;
`;

const STable = styled.table`
    font-size: 2rem;
    width: 100%;
    @media(max-width: 700px) {
        font-size: 2.5rem;
    }
`;

const SSecondTd = styled.td`
    padding-left: 3rem;
`;