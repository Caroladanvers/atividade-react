import React from "react";
import { NavLink } from "react-router-dom"; 
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;    
    gap: 20px;
`;

const StyledLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;

  &:hover,
  &.active {
    color: white;
    text-decoration: underline;
}
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Atividade React</h1>
            <Nav>
                <StyledLink to="/" exact activeClassName="active">Home</StyledLink>
                <StyledLink to="/about" exact activeClassName="active">About</StyledLink>
                <StyledLink to="/not-found" exact activeClassName="active">Not Found</StyledLink>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;