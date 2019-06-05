import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import searchImage from '../../assets/images/SearchImage.png';

const StyledImage = styled.img`
  width: 120%;
  position: relative;
  -webkit-box-shadow: 0px 0px 57px 0px rgba(173, 173, 173, 1);
  -moz-box-shadow: 0px 0px 57px 0px rgba(173, 173, 173, 1);
  box-shadow: 0px 0px 57px 0px rgba(173, 173, 173, 1);
  left: -170px;
  border-radius: 10px;
  ${({ theme }) => theme.mq.tablet} {
    margin-top: 20px;
    position: initial;
  }
`;
export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.links};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.grey};
  padding-bottom: 3rem;
`;
const StyledSection = styled.section`
  padding: 100px 0 150px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  ${({ theme }) => theme.mq.tablet} {
    text-align: center;
  }
`;

export default function SearchSection() {
  return (
    <StyledSection>
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <StyledImage className="z-depth-5" src={searchImage} alt="" />
          </div>
          <div className="col s12 m6">
            <h3 className="teal-text teal-accent-3">
              Use a search engine to find favourite titles.
            </h3>
            <StyledParagraph>
              Search and have fun. Use filters and get books depending on your
              preferences
            </StyledParagraph>
            <Link
              to="/"
              className=" z-depth-5 btn waves-effect indigo darken-4 btn-large"
            >
              Search for books <i className="material-icons">search</i>
            </Link>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
