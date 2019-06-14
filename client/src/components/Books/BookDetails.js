import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StarRating from 'react-star-ratings';
import Comments from '../Comments/Comments';
import CommentForm from '../Comments/CommentForm';
import BookNavigation from './BookNavigation';

const StyledWrapper = styled.div`
  padding-top: 130px;
  ${({ theme }) => theme.mq.tablet} {
    padding-top: 80px;
  }
`;
const StyledCard = styled.div`
  padding: 25px;
  ${({ theme }) => theme.mq.tablet} {
    padding: 0;
  }
`;
const StyledTitle = styled.h4`
  margin-top: 0;
`;
const StyledRow = styled.div`
  padding-bottom: 50px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.lightGrey};
`;
const StyledDescription = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;
class BookDetails extends Component {
  state = {
    book: null,
  };

  componentWillMount() {
    const { match } = this.props;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${match.params.book_id}`
      )
      .then(data => {
        this.setState({
          book: data.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { book } = this.state;
    const description = book ? book.volumeInfo.description : null;

    return book ? (
      <StyledWrapper className="container">
        <StyledCard className="card">
          <div className="row">
            <div className="col m9 s12">
              <StyledRow className="row">
                <div className="col m2">
                  {book && book.volumeInfo.imageLinks.thumbnail ? (
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                  ) : null}
                </div>
                <div className="col m10">
                  <StyledTitle>
                    {book.volumeInfo.title}. {book.volumeInfo.subtitle}
                  </StyledTitle>
                  <h6>
                    <span className="grey-text text-lighten-1">Authors: </span>
                    {book.volumeInfo.authors
                      ? book.volumeInfo.authors.map(author => {
                          return `${author}\u00A0\u00A0\u00A0`;
                        })
                      : 'Unknown'}
                  </h6>
                  <h6>
                    <span className="grey-text text-lighten-1">Pages: </span>
                    {book.volumeInfo.pageCount}
                  </h6>
                  <StarRating
                    rating={2.403}
                    numberOfStars={5}
                    starDimension="25px"
                    starRatedColor="#f39c12"
                  />
                </div>
              </StyledRow>
              <StyledRow>
                <h5 className="teal-text teal-accent-3">
                  Description{' '}
                  <span>
                    <i className="material-icons">description</i>
                  </span>
                </h5>
                <StyledDescription
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </StyledRow>
              <Comments />
              <CommentForm />
            </div>
            <div className="col m3 s12">
              <BookNavigation />
            </div>
          </div>
        </StyledCard>
      </StyledWrapper>
    ) : null;
  }
}
export default BookDetails;
