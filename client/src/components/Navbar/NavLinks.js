import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '../StyledComponents/Button';

const StyledList = styled.ul`
  display: ${({ responsive }) => (responsive ? 'none' : 'flex')};
  transition: 0.25s ease-in-out;
  align-items: center;
  transform: translateX(${({ offset }) => (offset > 100 ? '50px' : '0px')});
  list-style: none;
  padding: 0;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;
    display: ${({ responsive }) => (responsive ? 'flex' : 'none')};
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 20px;
  font-family: ${({ theme }) => theme.font.firaSans};

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;
    display: block;
    margin: 5px 0;
  }
`;
const StyledButton = styled(Button)`
  ${({ theme }) => theme.mq.tablet} {
    display: block;
    margin-top: 10px;
  }
`;

export default function NavLinks({ responsive }) {
  return (
    <StyledList responsive={responsive}>
      {/* Signed in links */}
      <li>
        <StyledNavLink to="/search">Search</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/">Bookshelf</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/">Account</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/">
          Log Out <i className="fas fa-sign-out-alt" />
        </StyledNavLink>
      </li>
      {/* Signed out links */}
      <li>
        <StyledNavLink to="/">Sign In</StyledNavLink>
      </li>
      <li>
        <StyledButton as={NavLink} to="/">
          <i className="fas fa-external-link-alt" /> Sign Up
        </StyledButton>
      </li>
    </StyledList>
  );
}
