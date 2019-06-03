import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Wrapper from '../StyledComponents/Wrapper';
import Col from '../StyledComponents/Col';
import Button from '../StyledComponents/Button';
import CollectionImage from '../../assets/images/Collection.png';
import { StyledH2 } from '../StyledComponents/TextComponents';

const StyledWrapper = styled(Wrapper)`
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const StyledHeading = styled(StyledH2)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.grey};
  padding-bottom: 3rem;

  ${({ theme }) => theme.mq.tablet} {
    font-size: 1.5 rem;
  }
`;
export const StyledButton = styled(Button)`
  border: 3px ${({ theme }) => theme.colors.primary} solid;
`;

export const StyledDiv = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    text-align: center;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  position: relative;
  -webkit-box-shadow: 0px 0px 57px 0px rgba(173, 173, 173, 1);
  -moz-box-shadow: 0px 0px 57px 0px rgba(173, 173, 173, 1);
  box-shadow: 0px 0px 57px 0px rgba(173, 173, 173, 1);
  border-radius: 10px;
  top: 50px;
  left: 20px;
  ${({ theme }) => theme.mq.tablet} {
    margin-top: 50px;
    position: initial;
  }
`;

export default function CollectionSection() {
  return (
    <StyledWrapper>
      <Col flex={1}>
        <StyledDiv>
          <StyledHeading>
            Organize your book collection like a real bookshelf.{' '}
          </StyledHeading>
          <StyledParagraph>
            Choose your titles and categories. <br /> Create professional
            bookshelf
            <br /> if you’ll love, in just a few clicks
          </StyledParagraph>
          <StyledButton as={Link} to="/">
            Create Collection <i className="fas fa-arrow-right" />
          </StyledButton>
        </StyledDiv>
      </Col>
      <Col flex={1}>
        <StyledDiv>
          <StyledImage src={CollectionImage} alt="" />
        </StyledDiv>
      </Col>
    </StyledWrapper>
  );
}
