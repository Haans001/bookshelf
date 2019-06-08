import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../StyledComponents/Wrapper';
import Button from '../StyledComponents/Button';
import img from '../../assets/images/hero-bg.jpg';

const StyledWrapper = styled.div`
  padding-top: 130px;
  height: 100vh;

  ${({ theme }) => theme.mq.tablet} {
    padding-top: 80px;
  }
`;

const StyledH2 = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-top: 50px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 2.2rem;
  }
`;
const StyledH3 = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin: 50px 0;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 1.7rem;
  }
`;

const StyledSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Hero() {
  return (
    <StyledSection>
      <StyledWrapper className="container center">
        <h5 className="grey-text grey-lighten-2">
          FREE BOOKSHELF FOR EVERY BOOKFHILE
        </h5>
        <StyledH2 className="white-text">
          Free book collection software build by book enthusiasts for every
          reader
        </StyledH2>
        <StyledH3 className="white-text">
          Build your collections, add reviews and share your experience with
          others. Create your own book community!
        </StyledH3>
        <Link to="/" className="btn waves-effect red lighten-2 btn-large">
          Sign Up
        </Link>
      </StyledWrapper>
    </StyledSection>
  );
}
