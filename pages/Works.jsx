import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Work from '../components/Work';
import Head from 'next/head';

const Works = () => {
    return(
        <>
            <Head>
                <title>kazuki's portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GlobalStyle />
            <Header />
            <SContentContainer>
                <Title title="Works" />
                <SWorkContainer>
                    <Work imgSrc="todolist.png" Url="http://kazukazu2027.github.io/reactTodoList" workTitle="TODOリスト"  workIntroduction="Reactを用いてTODOリストを作成しました。React Hookで実装しています。" />
                    <Work imgSrc="pictureSearch.png" Url="http://kazukazu2027.github.io/pictureSearch" workTitle="画像検索アプリ"  workIntroduction="Reactを用いて画像検索アプリを作成しました。画像は非同期処理を用いて表示させています。また、styled-componentsを採用し、検索ボタンはmaterial-uiを用いて作成しました。" />
                    <Work imgSrc="portfolio.png" Url="https://portfolioreact-ibr233y61-kazukazu2027.vercel.app/" workTitle="ポートフォリオ"  workIntroduction="ReactとNext.jsを用いてポートフォリオを作成しました。デプロイはVercelを使っています。" />
                </SWorkContainer>
            </SContentContainer>
            <Footer />
        </>
    )
}

export default Works;

const SContentContainer = styled.div`
    width:80%;
    margin: 0 auto;
`;

const SWorkContainer = styled.div`
    @media(max-width:700px) {
        display: flex;
        flex-wrap: wrap;
    }
    @media(max-width:450px) {
        display: block;
        flex-wrap: wrap;
    }
`;