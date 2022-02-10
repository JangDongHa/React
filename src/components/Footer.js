import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성한 것 (=> 컴포넌트 생성 이유 : 재사용하려고)
// Styled-Component -> js파일과 css파일을 통합하여 관리해줌
const StyledFooterDiv = styled.div`
    border: 1px solid black;
    height: 100px;
`;

const Footer = () => {
    return (
        <div>
            <div>
                <StyledFooterDiv>
                <ul>
                    <li>오시는 길 : 서울 강남구...</li>
                    <li>전화번호 : 01010101</li>
                </ul>
                </StyledFooterDiv>
            </div>
        </div>
    );
};

export default Footer;