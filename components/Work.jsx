import React from "react";
import styled from "styled-components";

const Work = (props) => {
  const { imgSrc, workTitle, skill, environment, deploy, Url, Lists } = props;
  return (
    <STodoList>
      <SWorkTitle>{workTitle}</SWorkTitle>
      <SContainer>
        <STodoListLeft>
          <SPicture>
            <a href={Url}>
              <SImg src={imgSrc} alt="" />
            </a>
          </SPicture>
        </STodoListLeft>
        <SExplanation>
          <SExplanationLeft>
            <SSkill>
              <SExplanationTitle>使用技術</SExplanationTitle>
              <SExplanationContent>{skill}</SExplanationContent>
            </SSkill>
            <SEnvironment>
              <SExplanationTitle>環境構築</SExplanationTitle>
              <SExplanationContent>{environment}</SExplanationContent>
            </SEnvironment>
            <SDeploy>
              <SExplanationTitle>デプロイ</SExplanationTitle>
              <SExplanationContent>{deploy}</SExplanationContent>
            </SDeploy>
          </SExplanationLeft>
          <SExplanationRight>
            <SStudyTitle>学んだこと</SStudyTitle>
            <SUl>
              {Lists.map((list, index) => {
                return <SStudy key={index}>{list}</SStudy>;
              })}
            </SUl>
          </SExplanationRight>
        </SExplanation>
      </SContainer>
    </STodoList>
  );
};

export default Work;

const STodoList = styled.div`
  padding: 0;
  margin: 0 0 3rem 0;
  @media (max-width: 700px) {
    display: block;
  }
`;

const SWorkTitle = styled.h2`
  font-size: 3rem;
  margin: 0;
  padding-bottom: 2rem;
  @media (max-width: 700px) {
    margin-top: 3rem;
  }
`;

const SContainer = styled.div`
  display: flex;
  @media (max-width: 900px) {
    display: block;
  }
`;

const STodoListLeft = styled.div`
  width: 40%;
  padding-right: 3rem;
  @media (max-width: 900px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 550px) {
    padding-right: initial;
  }
`;

const SPicture = styled.div`
  display: inline-block;
  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.8);
  @media (max-width: 700px) {
    width: 80%;
    text-align: center;
    margin-left: 3rem;
  }
  @media (max-width: 450px) {
    width: 100%;
    margin-left: initial;
  }
`;

const SImg = styled.img`
  width: 100%;
`;

const SExplanation = styled.div`
  margin-left: 3rem;
  width: 70%;
  display: flex;
  @media (max-width: 900px) {
    margin: 0 auto;
    margin-top: 3rem;
    width: 90%;
  }
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const SExplanationLeft = styled.div`
  width: 40%;
  @media (max-width: 550px) {
    width: 100%;
  }
`;

const SSkill = styled.div``;

const SExplanationTitle = styled.h2`
  font-size: 2.2rem;
  margin: 0;
  @media (max-width: 550px) {
    font-size: 2.5rem;
  }
`;
const SExplanationContent = styled.p`
  margin: 0;
  font-size: 1.8rem;
  margin-top: 0.3rem;
  @media (max-width: 550px) {
    font-size: 2.2rem;
  }
`;

const SEnvironment = styled.div`
  margin: 1rem 0;
`;

const SDeploy = styled.div``;

const SExplanationRight = styled.div`
  padding-left: 5rem;
  @media (max-width: 550px) {
    padding-left: initial;
    margin-top: 1rem;
  }
`;

const SStudyTitle = styled.h2`
  font-size: 2.2rem;
  margin: 0;
  @media (max-width: 550px) {
    font-size: 2.5rem;
  }
`;

const SUl = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 0.5rem;
`;

const SStudy = styled.li`
  font-size: 1.8rem;
  list-style-position: inside;
  line-height: 1.3;
  word-break: break-all;
  @media (max-width: 550px) {
    font-size: 2.2rem;
  }
`;
