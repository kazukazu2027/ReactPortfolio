import React from 'react'
import styled from 'styled-components'

const Work = (props) => {
    const {imgSrc, workTitle, workIntroduction, Url } = props

    return(
        <STodoList>
            <SPicture>
                <a href={Url}>
                    <SImg src={imgSrc} alt=""/>
                </a>
            </SPicture>
            <SExplanation>
                <SWorkTitle>{workTitle}</SWorkTitle>
                <SWorkIntroduction>{workIntroduction}</SWorkIntroduction>
            </SExplanation>
        </STodoList>
    )
}

export default Work

const STodoList = styled.div`
    display: flex;
    padding: 0;
    margin: 1.5rem 0;
    @media(max-width:700px) {
        display: block;
        width: 50%;
    }
    @media(max-width:450px) {
        width: 70%;
        margin: 0 auto;
    }
`;

const SPicture = styled.div`
    width: 30%;
    display: inline-block;
	box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.8);
    @media(max-width:700px) {
        width: 80%;
        text-align: center;
        margin-left: 3rem;
    }
    @media(max-width:450px) {
        width: 100%;
    }
`;

const SImg = styled.img`
    width: 100%;
    @media(max-width:700px) {
        width: 100%;
        height: 15rem;
    }
`;

const SExplanation = styled.div`
    margin-left: 3rem;
    width: 70%
`;

const SWorkTitle = styled.h2`
    font-size: 3rem;
    margin: 0;
    @media(max-width:700px) {
        margin-top: 3rem;
    }
`;

const SWorkIntroduction = styled.p`
    font-size: 2rem;
    word-break: break-all;
    @media(max-width:700px) {
        word-break: break-all;
        width: 120%;
    }
`;