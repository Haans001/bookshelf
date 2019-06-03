import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../StyledComponents/Wrapper';
import {
  StyledParagraph,
  StyledHeading,
  StyledButton,
  StyledDiv,
} from './CollectionSection';
import Col from '../StyledComponents/Col';
import searchImage from '../../assets/images/SearchImage.png';

const StyledWrapper = styled(Wrapper)`
  margin-bottom: 100px;
  flex-wrap: wrap;
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row-reverse;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  position: relative;
  -webkit-box-shadow: 0px 0px 57px 0px rgba(173, 173, 173, 1);
  -moz-box-shadow: 0px 0px 57px 0px rgba(173, 173, 173, 1);
  box-shadow: 0px 0px 57px 0px rgba(173, 173, 173, 1);
  left: -100px;
  border-radius: 10px;
  ${({ theme }) => theme.mq.tablet} {
    margin-top: 20px;
    position: initial;
  }
`;

export default function SearchSection() {
  return (
    <StyledWrapper>
      <Col flex={1}>
        <StyledImage src={searchImage} alt="" />
      </Col>
      <Col flex={1}>
        <StyledDiv>
          <StyledHeading>
            Use a search engine to find favourite titles.
          </StyledHeading>
          <StyledParagraph>
            Search and have fun. Use filters and get books <br /> depending on
            your preferences
          </StyledParagraph>
          <StyledButton as={Link} to="/">
            Search For Books <i className="fas fa-arrow-right" />
          </StyledButton>
        </StyledDiv>
      </Col>
    </StyledWrapper>
  );
}
