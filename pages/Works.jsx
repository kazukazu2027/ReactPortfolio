import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Work from "../components/Work";

const Works = () => {
  const todoLists = [
    "create-react-appの環境構築",
    "Hooksの使い方",
    "コンポーネント",
    "github pagesを使ったデプロイ",
  ];
  const imageLists = ["reactを用いたデータのやり取り"];
  const portfolioLists = ["Next js", "Nextのページ遷移"];
  const shopLists = ["現在地の取得", "SSRの実装", "promiseを用いた非同期処理"];
  const movieLists = ["webpackを用いた環境構築", "TypeScript", "tailwind css"];

  return (
    <SDiv>
      <GlobalStyle />
      <Header />
      <SContentContainer>
        <Title title="Works" />
        <SWorkContainer>
          <Work
            imgSrc="todolist.png"
            Url="http://kazukazu2027.github.io/reactTodoList"
            workTitle="TODOリスト"
            skill="React/styled-components"
            environment="create-react-app"
            deploy="GitHub Pages"
            Lists={todoLists}
          />
          <Work
            imgSrc="pictureSearch.png"
            Url="http://kazukazu2027.github.io/pictureSearch"
            workTitle="画像検索アプリ"
            skill="React/styled-components"
            environment="create-react-app"
            deploy="GitHub Pages"
            Lists={imageLists}
          />
          <Work
            imgSrc="portfolio.png"
            Url="https://portfolio-kazukazu2027.vercel.app/"
            workTitle="ポートフォリオ"
            skill="React/Next js/styled-components"
            environment="create-next-app"
            deploy="vercel"
            Lists={portfolioLists}
          />
          <Work
            imgSrc="shop_search.png"
            Url="https://shop-search.vercel.app/"
            workTitle="居酒屋検索アプリ"
            skill="React/Next js/styled-components"
            environment="create-next-app"
            deploy="vercel"
            Lists={shopLists}
          />
          <Work
            imgSrc="movie_search.png"
            Url="https://kazukazu2027.github.io/movie_search/"
            workTitle="映画検索アプリ"
            skill="React/TypeScript/Next js/tailwind css"
            environment="webpack"
            deploy="GitHub Pages"
            Lists={movieLists}
          />
        </SWorkContainer>
      </SContentContainer>
      <Footer />
    </SDiv>
  );
};

export default Works;

const SDiv = styled.div`
  position: absolute;
`;

const SContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 4rem;
`;

const SWorkContainer = styled.div`
  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 450px) {
    display: block;
    flex-wrap: wrap;
  }
`;
