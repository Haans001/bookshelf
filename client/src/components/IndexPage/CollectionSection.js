import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CollectionImage from '../../assets/images/Collection.png';

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.links};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.grey};
  padding-bottom: 3rem;
`;

const StyledImage = styled.img`
  width: 110%;
  position: relative;
  border-radius: 10px;
  left: 50px;
  ${({ theme }) => theme.mq.tablet} {
    margin-top: 50px;
    position: initial;
    width: 100%;
    transform: translateY(-4rem);
  }
`;

const StyledSection = styled.section`
  padding: 100px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  ${({ theme }) => theme.mq.tablet} {
    text-align: center;
  }
`;

export default function CollectionSection() {
  return (
    <StyledSection>
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h3 className="teal-text teal-accent-3">
              Organize your book collection like a real bookshelf.
            </h3>
            <StyledParagraph>
              Choose your titles and categories. Create professional bookshelf
              if you’ll love, in just a few clicks
            </StyledParagraph>
            <Link
              to="/"
              className=" hide-on-med-and-down z-depth-5 indigo darken-4 btn-large"
            >
              Create Collection <i className="material-icons">add</i>
            </Link>
          </div>
          <div className="col s12 m6">
            <StyledImage className="z-depth-5" src={CollectionImage} alt="" />
            <Link
              to="/"
              className=" hide-on-med-and-up z-depth-5 indigo darken-4 btn-large"
            >
              Create Collection <i className="material-icons">add</i>
            </Link>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
