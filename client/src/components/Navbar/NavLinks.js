import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';

function NavLinks({ isAuthenticated, signOut }) {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/search">Search</NavLink>
      </li>

      {/* Signed in links */}
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
  );
}
const mapStateToProps = state => ({
  msg: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLinks);
