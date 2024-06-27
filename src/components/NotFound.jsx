import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './MainPage';

const ErrorContainer = styled.div`
    color: white;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const ErrorText = styled.h1`
    margin: 0;
    font-size: 2em;
    
`;

const ErrorTwo = styled.h2`
    margin: 0;
    font-size: 18px;
`;

const ErrorThree = styled.h3`
    margin: 0;
    font-size: 18px;    
`;

// const Link = styled.div`
//     display: inline-block;
//     color: white;
// `;


export default function NotFound() {
    return (
        <ErrorContainer className='error-container'>
            <ErrorText>Oops!</ErrorText>
            <ErrorTwo>예상치 못한 에러가 발생했습니다 (っ °Д °;)っ </ErrorTwo>
            <ErrorThree>Not Found</ErrorThree>

            {/* 메인으로 이동 어케 시키노 onClick 하면? to=로 이동 ? to가 안 먹히는 듯  */}
            {/* 갑자기 지 멋대로 실행됨  */}
            <Link className='go-main' to={"/"} >
                <p>메인으로 이동하기</p>
            </Link>
  
        </ErrorContainer>
        
        

    );
};