import React from 'react';
import StarRating from 'react-star-ratings';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`;
const StyledCard = styled.div`
  height: 300px;
  overflow: hidden;
  padding: 15px;

  ${({ theme }) => theme.mq.tablet} {
    height: auto;
    h4 {
      font-size: 1.5rem;
    }
    h3 {
    }
  }
`;

const StyledRecordInfo = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    padding-left: 80px !important;
  }
`;

const StyledAuthor = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.links};
`;

export default function BookRecord({ book }) {
  return (
    <StyledLink to={`/search/${book.id}`}>
      <StyledCard className="card hoverable">
        <div className="row">
          <div className="col s3">
            {book.volumeInfo.imageLinks ? (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            ) : null}
          </div>
          <StyledRecordInfo className="col s9">
            <h4>{book.volumeInfo.title}</h4>
            <h5>{book.volumeInfo.title ? book.volumeInfo.title : 'Unknown'}</h5>
            <StyledAuthor className="grey-text grey-text text-lighten-1">
              {book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown'}
            </StyledAuthor>
            <StarRating
              rating={2.403}
              numberOfStars={5}
              starDimension="16px"
              starRatedColor="#f39c12"
            />
          </StyledRecordInfo>
        </div>
      </StyledCard>
    </StyledLink>
  );
}
