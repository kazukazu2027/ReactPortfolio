import React from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import Link from 'next/link';
import SpMenu from './SpMenu';


const Header = () => {
    return(
      <>
        <SHeader>
            <SHeaderContainer>
                <Link href="/"><SStyledLink>Kazuki's portfolio</SStyledLink></Link>
                <NavMenu />
            </SHeaderContainer>
        </SHeader>
        <SpMenu />
      </>
    )
}

export default Header;


const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #404b75;
  width: 100%;
  font-size: 2rem;
`;

const SHeaderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const SStyledLink = styled.a`
  color: #fff;
  padding-top: 2rem;
  cursor: pointer;
  @media(max-width:600px) {
    padding: 2rem;
  } 
`;