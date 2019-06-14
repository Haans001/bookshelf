import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import StarRating from 'react-star-ratings';

const StyledWrapper = styled.div`
  margin-top: 50px;
`;
const StyledTextArea = styled.textarea`
  min-height: 10rem !important;
`;

export default class CommentForm extends Component {
  constructor() {
    super();
    this.changeRating = this.changeRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    body: '',
    rating: 0,
  };

  componentDidMount() {
    $('#textarea1').trigger('autoresize');
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({
      body: e.target.value,
    });
  }

  render() {
    const { rating, body } = this.state;
    return (
      <StyledWrapper>
        <h5 className="teal-text teal-accent-3">
          Add a comment <i className="material-icons">create</i>
        </h5>

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
      </StyledWrapper>
    );
  }
}
