import React, { Component } from 'react';
import StarRating from 'react-star-ratings';
import styled from 'styled-components';

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
export default class Comments extends Component {
  state = {
    comments: [
      {
        id: 1,
        nick: 'john',
        date: Date.now().toString(),
        rating: 2.5,
        body:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti explicabo sunt, dolorum quos nostrum repellendus ipsum natus mollitia, ipsa sed consequuntur doloribus? Accusantium, labore repellendus iure quis perspiciatis odio consectetur',
      },
      {
        id: 2,
        nick: 'anna',
        date: Date.now().toString(),
        rating: 3.1,
        body:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti explicabo sunt, dolorum quos nostrum repellendus ipsum natus mollitia, ipsa sed consequuntur doloribus? Accusantium, labore repellendus iure quis perspiciatis odio consectetur',
      },
      {
        id: 3,
        nick: 'marek',
        date: Date.now().toString(),
        rating: 5,
        body:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti explicabo sunt, dolorum quos nostrum repellendus ipsum natus mollitia, ipsa sed consequuntur doloribus? Accusantium, labore repellendus iure quis perspiciatis odio consectetur',
      },
    ],
  };

  render() {
    const { comments } = this.state;
    return (
      <div>
        <h5 className="teal-text teal-accent-3">
          Comments <i className="material-icons">comment</i>
        </h5>
        {comments.map(comment => {
          return (
            <StyledCard className="card" key={comment.id}>
              <StyledCommentInfo>
                <StarRating
                  rating={comment.rating}
                  numberOfStars={5}
                  starDimension="16px"
                  starRatedColor="#f39c12"
                />
                <h6 className="grey-text text-lighten1">
                  rated by : {comment.nick} {comment.date}
                </h6>
              </StyledCommentInfo>
              <p>{comment.body}</p>
            </StyledCard>
          );
        })}
      </div>
    );
  }
}
