import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.div`
  display: none;
  padding-left: 20px;
  li {
    float: initial;
    &:last-child {
      margin-top: 10px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none !important;
  }
`;

export default function MobileNavLinks() {
  return (
    <StyledWrapper id="mobile-nav" className="teal accent-4 ">
      <ul>
        {/* Signed in links */}
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/">Bookshelf</NavLink>
        </li>
        <li>
          <NavLink to="/">Account</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
        {/* Signed out links */}
        <li>
          <NavLink to="/">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn waves-effect red lighten-2 btn-large">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </StyledWrapper>
  );
}
