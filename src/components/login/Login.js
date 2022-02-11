import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledLoginDiv = styled.h1`
    padding: 30px 0 30px 0;
`;

const Login = (props) => {
    const {navigate} = props;
    return (
        <StyledLoginDiv>
            <h1>로그인 페이지입니다.</h1>
            <Button variant="primary" onClick={()=>navigate(-1)}>뒤로 가기</Button>{' '}
        </StyledLoginDiv>
    );
};

export default Login;