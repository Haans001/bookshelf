import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import StarRating from 'react-star-ratings';
import Comments from '../Comments/Comments';
import CommentForm from '../Comments/CommentForm';
import BookNavigation from './BookNavigation';

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

  componentDidMount() {
    const { match } = this.props;
    axios
      .get(`/books/get/${match.params.book_id}`)
      .then(res => {
        this.setState({
          book: res.data.volumeInfo,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { book } = this.state;
    const { match } = this.props;
    return book ? (
      <div className="container padding">
        <StyledCard className="card">
          <div className="row">
            <div className="col m9 s12">
              <StyledRow className="row">
                <div className="col m3 s12">
                  {book && book.imageLinks.thumbnail ? (
                    <img src={book.imageLinks.thumbnail} alt="" />
                  ) : null}
                </div>
                <div className="col m9 s12">
                  <StyledTitle>
                    {book.title}. {book.subtitle}
                  </StyledTitle>
                  <h6>
                    <span className="grey-text text-lighten-1">Authors: </span>
                    {book.authors
                      ? book.authors.map(author => {
                          return `${author}\u00A0\u00A0\u00A0`;
                        })
                      : 'Unknown'}
                  </h6>
                  <h6>
                    <span className="grey-text text-lighten-1">Pages: </span>
                    {book.pageCount}
                  </h6>
                  <StarRating
                    rating={book.book.calculatedRating}
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
                  dangerouslySetInnerHTML={{
                    __html: book.description,
                  }}
                />
              </StyledRow>
              <Comments comments={book.book.comments} />

              <CommentForm book_id={match.params.book_id} />
            </div>
            <div className="col m3 s12">
              <BookNavigation />
            </div>
          </div>
        </StyledCard>
      </div>
    ) : null;
  }
}
BookDetails.defaultProps = {
  match: {},
};
BookDetails.propTypes = {
  match: PropTypes.objectOf(),
};

export default BookDetails;
