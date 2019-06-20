import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { signIn } from '../../store/actions/authAction';

const StyledWrapper = styled.div`
  padding-top: 130px;
  ${({ theme }) => theme.mq.tablet} {
    padding-top: 100px;
  }
  button {
    width: 100%;
  }
`;
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.grey};
  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
const StyledCard = styled.div`
  max-width: 700px;
  margin: 0 auto !important;
  padding: 30px;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
  }
`;
const StyledHeading = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
const StyledCheck = styled.label`
  [type='checkbox']:checked + span:not(.lever)::before {
    border-right: 2px solid ${({ theme }) => theme.colors.secondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

class SignIn extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    email: '',
    password: '',
  };

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { signIn } = this.props;
    signIn(this.state);
  }

  render() {
    const { errors, isAuthenticated } = this.props;

    if (isAuthenticated) return <Redirect to="/" />;

    return (
      <StyledWrapper>
        <StyledCard className="card secondary-input-field ">
          <StyledHeading className="center teal-text text-accent-4">
            Login
          </StyledHeading>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col s12 input-field ">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 input-field ">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <p>
              <StyledCheck>
                <input type="checkbox" />
                <span>Remember Me</span>
              </StyledCheck>

              <StyledLink to="/" className="right">
                Forgot a password?
              </StyledLink>
            </p>
            <button
              type="submit"
              className="z-depth-5 waves-effect indigo darken-4 btn-large"
            >
              Login
            </button>
            <p className="center grey-text ">
              Not a member?{' '}
              <Link className="red-text text-lighten-2" to="/">
                Sign up
              </Link>{' '}
              now!
            </p>
          </form>
          {errors
            ? errors.map(error => (
                <p key={error.param} className="center red-text">
                  {error.msg}
                </p>
              ))
            : null}
        </StyledCard>
      </StyledWrapper>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  signIn: state => dispatch(signIn(state)),
});
const mapStateToProps = state => ({
  errors: state.auth.errors,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
