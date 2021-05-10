import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <SPush></SPush>
      <SFooter>
        <SCopyRight>Copyright © 2021 kazuki. All Rights Reserved.</SCopyRight>
      </SFooter>
    </>
  );
};

export default Footer;

const SFooter = styled.div`
  background-color: #404b75;
  width: 100%;
  height: 5rem;
`;

const SCopyRight = styled.p`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  line-height: 5rem;
`;

const SPush = styled.div`
  height: 5rem;
`;
