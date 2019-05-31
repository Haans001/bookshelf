import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
  padding: 20px;
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }

  &:hover {
    cursor: pointer;
  }
`;
const InnerHamburger = styled.div`
  width: 40px;
  height: 5px;
  position: relative;
  background-color: white;
  &::before {
    position: absolute;
    background-color: white;
    content: '';
    width: 100%;
    height: 5px;
    top: -8px;
    left: 0;
  }
  &::after {
    background-color: white;
    position: absolute;
    content: '';
    width: 100%;
    height: 5px;
    top: 8px;
    left: 0;
  }
`;

export default function Hamburger(props) {
  return (
    <StyledHamburger {...props}>
      <InnerHamburger />
    </StyledHamburger>
  );
}
