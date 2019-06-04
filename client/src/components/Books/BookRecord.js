import React from 'react';
import StarRating from 'react-star-ratings';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

const StyledTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 0;
`;
const StyledSubtitle = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};
`;
const StyledAuthor = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.links};
  color: ${({ theme }) => theme.colors.grey};
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.colors.lighterGrey};
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;
  padding: 20px;
`;

const ImageContainer = styled.div` 
  width: 150px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const InfoWrapper = styled.div`
  padding-left: 20px;
`;
export default function BookRecord({ book }) {
  return (
    <Wrapper as={StyledLink} to={`/search/${book.id}`}>
      <ImageContainer>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
      </ImageContainer>
      <InfoWrapper>
        <StyledTitle>{book.volumeInfo.title}</StyledTitle>
        <StyledSubtitle>{book.volumeInfo.subtitle}</StyledSubtitle>
        <StyledAuthor>
          {book.volumeInfo.authors && book.volumeInfo.authors[0]}
        </StyledAuthor>
        <StarRating
          rating={2.403}
          numberOfStars={5}
          starDimension="20px"
          starRatedColor="#f39c12"
        />
      </InfoWrapper>
    </Wrapper>
  );
}
