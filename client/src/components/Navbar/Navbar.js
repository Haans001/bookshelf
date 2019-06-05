import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import MobileNavLinks from './MobileNavLinks';

const StyledNav = styled.nav`
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export default function Navbar() {
  const [isOpen, open] = useState(false);

  const toogleMenu = () => {
    if (isOpen) {
      $('#mobile-nav').slideDown();
    } else {
      $('#mobile-nav').slideUp();
    }
    open(!isOpen);
  };

  return (
    <StyledNav className="teal accent-4 nav-extended">
      <div className="nav-wrapper container">
        <Link className="brand-logo left" to="/">
          Bookphiles <i className="fas fa-book-open" />
        </Link>
        <NavLinks />
        <a href="#" data-target="mobile-demo" className="right sidenav-trigger">
          <i className="material-icons" onClick={toogleMenu}>
            menu
          </i>
        </a>
      </div>
      <MobileNavLinks />
    </StyledNav>
    // <StyledHeader>
    //   <StyledWrapper>
    //     <StyledLink to="/">
    //       <StyledHeading>
    //         Bookphiles <i className="fas fa-book-open" />
    //       </StyledHeading>
    //     </StyledLink>
    //     <nav>
    //       <NavLinks />
    //     </nav>
    //
    //   </StyledWrapper>
    //
    // </StyledHeader>
  );
}
