import React from "react";
import Link from "next/link";
import styled from "styled-components";

const NavMenu = () => {
  return (
    <SContentUl>
      <SContentLi>
        <Link href="/">
          <SStyledLink>HOME</SStyledLink>
        </Link>
      </SContentLi>
      <SContentLi>
        <Link href="/About">
          <SStyledLink>ABOUT</SStyledLink>
        </Link>
      </SContentLi>
      <SContentLi>
        <Link href="/Skills">
          <SStyledLink>SKILLS</SStyledLink>
        </Link>
      </SContentLi>
      <SContentLi>
        <Link href="/Works">
          <SStyledLink>WORKS</SStyledLink>
        </Link>
      </SContentLi>
      <SContentLi>
        <Link href="/Contact">
          <SStyledLink>CONTACT</SStyledLink>
        </Link>
      </SContentLi>
    </SContentUl>
  );
};

export default NavMenu;

const SContentUl = styled.ul`
  display: flex;
  list-style: none;
  color: #ffffff;
  @media (max-width: 600px) {
    display: none;
  }
`;

const SContentLi = styled.li`
  margin-left: 1.2rem;
  color: #ffffff;
`;

const SStyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
