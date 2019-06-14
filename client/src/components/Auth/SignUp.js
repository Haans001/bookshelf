import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  max-width: 700px;
  margin: 0 auto !important;
  padding: 30px;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
  }
`;

const StyledWrapper = styled.div`
  padding-top: 130px;
  ${({ theme }) => theme.mq.tablet} {
    padding-top: 100px;
  }

  button {
    width: 100% !important;
  }
`;

const StyledHeading = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default class SignUp extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    userName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <StyledWrapper className="container">
        <StyledCard className="card text-field">
          <StyledHeading className="center teal-text text-accent-4">
            Create a free account
          </StyledHeading>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col s12 input-field">
                <input
                  id="userName"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="userName">UserName</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 input-field">
                <input
                  id="email"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 input-field">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 input-field">
                <input
                  id="repeatPassword"
                  type="password"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="repeatPassword">Repeat Password</label>
              </div>
            </div>
            <button
              type="submit"
              className="z-depth-5 waves-effect indigo darken-4 btn-large"
            >
              Create account
            </button>
          </form>
        </StyledCard>
      </StyledWrapper>
    );
  }
}
