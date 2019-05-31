import styled from 'styled-components';

const Button = styled.a`
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.primary : theme.colors.white};

  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.primary};

  border-radius: 18px;
  text-decoration: none;
  padding: ${({ primary }) => (primary ? '14px 20px' : '14px')};
  font-size: ${({ theme, primary }) =>
    primary ? theme.fontSize.m : theme.fontSize.links};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.links};
  }
`;

export default Button;
