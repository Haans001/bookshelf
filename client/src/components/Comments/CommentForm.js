import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import $ from 'jquery';
import StarRating from 'react-star-ratings';
import { submitComment } from '../../store/actions/commentAction';

const StyledWrapper = styled.div`
  margin-top: 50px;
`;
const StyledTextArea = styled.textarea`
  min-height: 10rem !important;
`;

class CommentForm extends Component {
  state = {
    book_id: this.props.book_id,
    rating: 0,
    body: '',
  };

  componentDidMount() {
    $('#textarea1').trigger('autoresize');
  }

  changeRating = newRating => {
    this.setState({
      rating: newRating,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { submitComment: _submitComment } = this.props;
    _submitComment(this.state);
    this.setState({
      rating: 0,
      body: '',
    });
  };

  handleChange = e => {
    this.setState({
      body: e.target.value,
    });
  };

  render() {
    const { rating, body } = this.state;
    const { user } = this.props;
    return (
      <StyledWrapper className="secondary-input-field">
        <h5 className="teal-text  teal-accent-3">
          Add a comment <i className="material-icons">create</i>
        </h5>
        {user ? (
          <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>
              <div className="row">
                <StarRating
                  rating={rating}
                  numberOfStars={5}
                  changeRating={this.changeRating}
                  starDimension="30px"
                  starHoverColor="#f39c12"
                  starRatedColor="f39c12"
                />
                <div className="input-field col s12 card">
                  <StyledTextArea
                    id="textarea1"
                    className="materialize-textarea"
                    onChange={this.handleChange}
                    value={body}
                  />
                  <label htmlFor="textarea1">Comment</label>
                </div>
              </div>
              <button
                type="submit"
                className="btn className z-depth-5 btn waves-effect indigo darken-4"
              >
                Submit a comment
              </button>
            </form>
          </div>
        ) : (
          <h5 className="center teal-text teal-accent-3">
            Log in to add a comment
          </h5>
        )}
      </StyledWrapper>
    );
  }
}
// const mapDispatchToProps = dispatch => ({
//   submitComment: comment => dispatch(submitComment(comment)),
// });
const mapDispatchToProps = {
  submitComment,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
