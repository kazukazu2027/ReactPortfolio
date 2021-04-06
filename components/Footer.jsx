import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
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
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0;
    height: 5rem;
    margin-bottom: -5rem;
`;

const SCopyRight = styled.p`
    font-size: 2rem;
    color: #fff;
    text-align: center;
`;

const SPush = styled.div`
    height: 5rem;
`;