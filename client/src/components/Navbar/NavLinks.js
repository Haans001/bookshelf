import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NavLinks() {
  return (
    <ul className="right hide-on-med-and-down">
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
  );
}
