import React from 'react';
import styled from 'styled-components';

const SNS = (props) => {
    const {snsTitle, snsImg, snsUrl} = props
    return(
        <SSns>
            <SSnsTitle>{snsTitle}</SSnsTitle>
            <a href={snsUrl}>
                <SImg src={snsImg} alt=""/>
            </a>
        </SSns>
    )
}

export default SNS;

const SSnsTitle = styled.h2`
    font-size: 3rem;
`;

const SImg = styled.img`
    width: 8rem;
`;

const SSns = styled.div`
    width: 33%;
`;