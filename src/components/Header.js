import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성한 것 (=> 컴포넌트 생성 이유 : 재사용하려고)
// Styled-Component -> js파일과 css파일을 통합하여 관리해줌
const StyledHeaderDiv = styled.div`
    border: 1px solid black;
    height: 100px;
`;

const Header = () => {
    return (
        <div>
            <div>
                <StyledHeaderDiv>
                <ul>
                    <li>메뉴 1</li>
                    <li>메뉴 2</li>
                </ul>
                </StyledHeaderDiv>
            </div>
        </div>
    );
};

export default Header;