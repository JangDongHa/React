import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성한 것 (=> 컴포넌트 생성 이유 : 재사용하려고)
// Styled-Component -> js파일과 css파일을 통합하여 관리해줌
const StyledHeaderDiv = styled.div`
    border: 1px solid black;
    height: 100px;
    background-color: ${(props)=> props.backgroundColor};
`;

const StyledHeaderLink = styled(Link)`
    color: red;
`;

const Header = () => {
    return (
        <>
            <div>
                <StyledHeaderDiv backgroundColor= "blue">
                <ul>
                    <li>
                        <StyledHeaderLink to="/" color='white'>Home</StyledHeaderLink>
                    </li>
                    <li>
                        <Link to="/login/10">Login</Link>
                    </li>
                </ul>
                </StyledHeaderDiv>
            </div>
            <div>
                            <>
                
                <Navbar bg="primary" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                <br />
                </>
            </div>
        </>
        
    );
};

export default Header;