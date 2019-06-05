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
              className=" z-depth-5 btn waves-effect indigo darken-4 btn-large"
            >
              Create Collection <i className="material-icons">add</i>
            </Link>
          </div>
          <div className="col s12 m6">
            <StyledImage className="z-depth-5" src={CollectionImage} alt="" />
          </div>
        </div>
      </div>
    </StyledSection>
    // <StyledWrapper>
    //   <Col flex={1}>
    //     <StyledDiv>
    //       <StyledHeading>
    //         Organize your book collection like a real bookshelf.{' '}
    //       </StyledHeading>
    //       <StyledParagraph>
    //         Choose your titles and categories. <br /> Create professional
    //         bookshelf
    //         <br /> if you’ll love, in just a few clicks
    //       </StyledParagraph>
    //       <StyledButton as={Link} to="/">
    //         Create Collection <i className="fas fa-arrow-right" />
    //       </StyledButton>
    //     </StyledDiv>
    //   </Col>
    //   <Col flex={1}>
    //     <StyledDiv>
    //       <StyledImage src={CollectionImage} alt="" />
    //     </StyledDiv>
    //   </Col>
    // </StyledWrapper>
  );
}
