import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';

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

function MobileNavLinks({ isAuthenticated, signOut }) {
  return (
    <StyledWrapper id="mobile-nav" className="teal accent-4 ">
      <ul>
        {/* Signed in links */}
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        {isAuthenticated ? (
          <React.Fragment>
            <li>
              <NavLink to="/">Bookshelf</NavLink>
            </li>
            <li>
              <NavLink to="/">Account</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => signOut()}>
                Log Out
              </NavLink>
            </li>
          </React.Fragment>
        ) : null}
        {/* Signed out links */}
        {!isAuthenticated ? (
          <React.Fragment>
            <li>
              <NavLink to="/signin">Sign In</NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className="btn waves-effect red lighten-2 btn-large"
              >
                Sign Up
              </NavLink>
            </li>
          </React.Fragment>
        ) : null}
      </ul>
    </StyledWrapper>
  );
}
const mapStateToProps = state => ({
  msg: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = {
  signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileNavLinks);
