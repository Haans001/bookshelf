import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchResults from './SearchResults';
import { searchBooks } from '../../store/actions/searchAction';

const StyledWrapper = styled.div`
  label {
    z-index: -1;
  }
  ${({ theme }) => theme.mq.tablet} {
    button:first-child {
      width: 100% !important;
    }
  }
`;

const RangeField = styled.div`
  display: flex;
  align-items: center;
  label {
    margin-right: 10px;
    font-size: 1rem;
    transform: translateY(-5px) !important;
  }
  p {
    margin: 0;
    input[type='range']::-moz-range-thumb {
      background-color: #1a237e;
    }
    span {
      background-color: #1a237e !important;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    justify-content: space-around;
  }
`;

const RadioField = styled.div`
  [type='radio']:checked + span::after,
  [type='radio'].with-gap:checked + span::after {
    background-color: #1a237e;
  }
  [type='radio']:checked + span::after,
  [type='radio'].with-gap:checked + span::before,
  [type='radio'].with-gap:checked + span::after {
    border-color: #1a237e;
  }
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: space-around;
  }
`;

class SearchComponent extends Component {
  state = {
    querry: '',
    maxResults: '10',
    orderBy: 'relevance',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search } = this.props;
    search(this.state);
  };

  render() {
    const { maxResults, data, querry } = this.state;

    return (
      <StyledWrapper className="container padding">
        <h2 className="teal-text teal-accent-3">Search for books...</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col m10 s12 input-field secondary-input-field">
              <input
                required
                id="querry"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={querry}
              />
              <label htmlFor="search">Search</label>
            </div>
            <div className="col m2 s12 ">
              <button
                className=" z-depth-5 btn waves-effect indigo darken-4 btn-large"
                type="submit"
              >
                Search <i className="material-icons">search</i>
              </button>
            </div>
          </div>
          <div className="row">
            <RadioField className="col m7 s12">
              <label>
                <input
                  name="group"
                  id="orderBy"
                  type="radio"
                  value="relevance"
                  defaultChecked
                  onChange={this.handleChange}
                />
                <span>Search by relevance</span>
              </label>
              <label>
                <input
                  name="group"
                  id="orderBy"
                  type="radio"
                  value="newest"
                  onChange={this.handleChange}
                />
                <span>Search by newest</span>
              </label>
            </RadioField>
            <RangeField className="col m5 s12">
              <label htmlFor="maxResults">
                <span>Number of Results</span>
              </label>
              <p className="range-field">
                <input
                  type="range"
                  id="maxResults"
                  value={maxResults}
                  min="0"
                  max="100"
                  onChange={this.handleChange}
                />
              </p>
            </RangeField>
          </div>
        </form>
        <SearchResults data={data} />
      </StyledWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  search: state => dispatch(searchBooks(state)),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchComponent);
