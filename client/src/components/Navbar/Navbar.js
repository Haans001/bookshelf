import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import Wrapper from '../StyledComponents/Wrapper';
import Hamburger from './Hamburger';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.25s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
`;
const StyledWrapper = styled(Wrapper)`
  justify-content: space-between;
  align-items: center;
`;
const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.font.firaSans};
  margin: 0;
  transition: 0.25s ease-in-out;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 2rem;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export default function Navbar() {
  const [isOpen, open] = useState(false);

  const toogleMenu = () => {
    open(!isOpen);
  };

  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledLink to="/">
          <StyledHeading>
            Bookphiles <i className="fas fa-book-open" />
          </StyledHeading>
        </StyledLink>
        <nav>
          <NavLinks />
        </nav>
        <Hamburger onClick={toogleMenu} />
      </StyledWrapper>
      <nav>{isOpen ? <NavLinks responsive /> : null}</nav>
    </StyledHeader>
  );
}
