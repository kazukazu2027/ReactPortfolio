import React from "react";
import styled from "styled-components";

const SkillContent = () => {
  return (
    <>
      <SSkills>
        <SSkillTop>
          <SSkill>
            <SSkillImage>
              <SImg src="html.png" alt="" />
              <SSkillText>HTML</SSkillText>
            </SSkillImage>
          </SSkill>
          <SSkill>
            <SSkillImage>
              <SImg src="css.png" alt="" />
              <SSkillText>CSS</SSkillText>
            </SSkillImage>
          </SSkill>
          <SSkill>
            <SSkillImage>
              <SImg src="javascript.png" alt="" />
              <SSkillText>JavaScript</SSkillText>
            </SSkillImage>
          </SSkill>
        </SSkillTop>
        <SSkillBottom>
          <SSkill>
            <SSkillImage>
              <SImg src="React.png" alt="" />
              <SSkillText>React</SSkillText>
            </SSkillImage>
          </SSkill>
          <SSkill>
            <SSkillImage>
              <SImg src="next.png" alt="" />
              <SSkillText>Next.js</SSkillText>
            </SSkillImage>
          </SSkill>
        </SSkillBottom>
      </SSkills>
    </>
  );
};

export default SkillContent;

const SSkills = styled.div``;

const SSkillTop = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  @media (max-width: 700px) {
    margin-top: 8rem;
  }
  @media (max-width: 500px) {
    margin-top: 13rem;
  }
`;

const SSkillBottom = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10rem 20rem;
  @media (max-width: 1000px) {
    margin: 10rem 10rem;
  }
  @media (max-width: 600px) {
    margin: 10rem 5rem;
  }
`;

const SImg = styled.img`
  width: 15rem;
  height: 15rem;
  @media (max-width: 500px) {
    width: 13rem;
    height: 13rem;
  }

  @media (max-width: 400px) {
    width: 10rem;
    height: 10rem;
  }
`;

const SSkill = styled.div`
  display: flex;
`;

const SSkillImage = styled.div``;

const SSkillText = styled.p`
  text-align: center;
  font-size: 2rem;
  margin: 0;
`;
