import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authAction';
import Errors from './Errors';

const StyledWrapper = styled.div`
  width: unset !important;
`;
const StyledCard = styled.div`
  max-width: 700px;
  margin: 0 auto !important;
  padding: 30px;
  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  button {
    width: 100% !important;
  }
`;

const StyledHeading = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

class SignUp extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { signUp } = this.props;
    signUp(this.state);
  };

  render() {
    const { errors, isAuthenticated } = this.props;
    if (isAuthenticated) return <Redirect to="/" />;
    return (
      <StyledWrapper className="container padding">
        <StyledCard className="card secondary-input-field">
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
          <Errors errors={errors} />
        </StyledCard>
      </StyledWrapper>
    );
  }
}
const mapDispatchToProps = {
  signUp,
};
const mapStateToProps = state => ({
  errors: state.errors.registerErrors,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

SignUp.defaultProps = {
  errors: [{ msg: '', param: '' }],
  isAuthenticated: false,
  signUp() {},
};
SignUp.propTypes = {
  errors: PropTypes.arrayOf(),
  isAuthenticated: PropTypes.bool,
  signUp: PropTypes.func,
};
