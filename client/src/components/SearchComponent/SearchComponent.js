import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Wrapper from '../StyledComponents/Wrapper';
import { StyledH2 } from '../StyledComponents/TextComponents';
import Button from '../StyledComponents/Button';
import { API_KEY } from '../../config/keys';
import SearchResults from './SearchResults';

const StyledHeading = styled(StyledH2)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 3px;
`;
const StyledWrapper = styled(Wrapper)`
  padding-top: 130px;
  display: block;
`;
const StyledSearchInput = styled.input`
  flex: 3;
  padding: 20px 14px;
  color: ${({ theme }) => theme.colors.grey};
  border-radius: 18px 0 0 18px;
  border: 3px ${({ theme }) => theme.colors.grey} solid;
  font-size: ${({ theme }) => theme.fontSize.s};
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.links};
  }
`;
const SearchBarWrapper = styled.div`
  display: flex;
  align-items: stretch;
`;
const InputWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-evenly;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLabel = styled.label`
  margin-right: 10px;
`;
const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.links} !important;
  display: block;
  border: none;
  border-radius: 0 18px 18px 0;
  &:hover {
    cursor: pointer;
  }
`;

export default class SearchComponent extends Component {
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
    const { querry, orderBy, maxResults } = this.state;

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${querry}&orderBy=${orderBy}&maxResults=${maxResults}&key=${API_KEY}`
      )
      .then(resp => {
        this.setState({
          data: resp.data.items,
        });
        console.log(this.state.data);
      });
  };

  render() {
    const { maxResults, data } = this.state;

    return (
      <StyledWrapper>
        <StyledHeading>Search for books.</StyledHeading>
        <form onSubmit={this.handleSubmit}>
          <SearchBarWrapper>
            <StyledSearchInput
              type="text"
              id="querry"
              required
              placeholder="Type in title, author, category..."
              onChange={this.handleChange}
            />
            <StyledButton as="button" type="submit" primary>
              Search <i className="fas fa-search" />
            </StyledButton>
          </SearchBarWrapper>
          <InputWrapper>
            <StyledLabel>
              <input
                checked
                name="group"
                type="radio"
                id="orderBy"
                value="relevance"
                onChange={this.handleChange}
              />
              Order By Relevance
            </StyledLabel>
            <StyledLabel>
              <input
                name="group"
                type="radio"
                id="orderBy"
                value="newest"
                onChange={this.handleChange}
              />
              Order By Newest
            </StyledLabel>
            <div>
              <span>{maxResults}</span>
              <input
                type="range"
                id="maxResults"
                value={maxResults}
                min="10"
                name="maxResults"
                max="40"
                onChange={this.handleChange}
                step="1"
              />
              <label htmlFor="maxResults">Max Results</label>
            </div>
          </InputWrapper>
        </form>
        <SearchResults data={data} />
      </StyledWrapper>
    );
  }
}
