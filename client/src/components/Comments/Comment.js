import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRating from 'react-star-ratings';

const StyledCommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h6 {
    margin: 0;
  }
  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }
`;
const StyledCard = styled.div`
  margin: 30px 0 !important;
  padding: 15px;
`;

export default function Comment({ comment }) {
  return (
    <StyledCard className="card">
      <StyledCommentInfo>
        <StarRating
          rating={comment.rating}
          numberOfStars={5}
          starDimension="16px"
          starRatedColor="#f39c12"
        />
        <h6 className="grey-text text-lighten1">
          rated by : {comment.userName} {comment.submit_date}
        </h6>
      </StyledCommentInfo>
      <p>{comment.body}</p>
    </StyledCard>
  );
}
Comment.defaultProps = {
  comment: {
    rating: 0,
    userName: 'Unknown',
    submit_date: 'Infinite',
  },
};
Comment.propTypes = {
  comment: PropTypes.objectOf(),
};
