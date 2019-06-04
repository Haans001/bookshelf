import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../StyledComponents/Wrapper';
import {
  StyledH1,
  StyledH2,
  StyledH3,
} from '../StyledComponents/TextComponents';
import Button from '../StyledComponents/Button';

const StyledWrapper = styled(Wrapper)`
  padding-top: 130px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;
`;

export default function Hero() {
  return (
    <StyledWrapper>
      <StyledH3>FREE BOOKSHELF FOR EVERY BOOKFHILE</StyledH3>
      <StyledH1>
        Free book collection software build by book enthusiasts for every reader{' '}
      </StyledH1>
      <StyledH2>
        Build your collections, add reviews and share your experience with
        others. Create your own book community!
      </StyledH2>
      <Button as={Link} primary to="/">
        <i className="fas fa-external-link-alt" /> Sign Up
      </Button>
    </StyledWrapper>
  );
}
