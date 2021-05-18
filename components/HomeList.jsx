import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HomeList = () => {
  return (
    <SListContent>
      <SUl>
        <SLi>
          <Link href="/">
            <SStyledLink>HOME</SStyledLink>
          </Link>
        </SLi>
        <SLi>
          <Link href="/About">
            <SStyledLink>ABOUT</SStyledLink>
          </Link>
        </SLi>
        <SLi>
          <Link href="/Skills">
            <SStyledLink>SKILLS</SStyledLink>
          </Link>
        </SLi>
        <SLi>
          <Link href="/Works">
            <SStyledLink>WORKS</SStyledLink>
          </Link>
        </SLi>
        <SLi>
          <Link href="/Contact">
            <SStyledLink>CONTACT</SStyledLink>
          </Link>
        </SLi>
      </SUl>
    </SListContent>
  );
};

export default HomeList;

const SListContent = styled.div`
  width: 50%;
  padding-left: 10rem;
  padding-top: 2rem;
  @media (max-width: 600px) {
    width: 100%;
    padding-left: initial;
    padding-top: initial;
  }
`;

const SUl = styled.ul`
  color: #1e366a;
  border: dotted #1e366a 3px;
  padding: 0.5em 0.5em 0.5em 2em;
  width: 60%;
  border-radius: 15px;
  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const SLi = styled.li`
  line-height: 1.2;
  padding: 0.5em 0;
  padding-left: 1em;
  font-size: 3rem;
  list-style-position: inside;
`;

const SStyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
