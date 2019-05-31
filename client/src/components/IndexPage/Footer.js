import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../StyledComponents/Wrapper';
import Col from '../StyledComponents/Col';
import { StyledH3 } from '../StyledComponents/TextComponents';

const StyledWrapper = styled(Wrapper)`
  flex-wrap: wrap;
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`;
const StyledCol = styled(Col)`
  padding: 0 50px;
  text-align: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 10px 0;
  color: white;
  display: block;
  &:hover {
    color: white;
  }
`;

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.blue};
`;

const StyledParagraph = styled.p`
  text-align: center;
  border-top: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;
export default function Footer() {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledCol flex="33%">
          <StyledH3>
            Bookphiles <i className="fas fa-book-open" />
          </StyledH3>
          <StyledLink>Home</StyledLink>
          <StyledLink>About</StyledLink>
          <StyledLink>Apps</StyledLink>
          <StyledLink>Contact</StyledLink>
        </StyledCol>
        <StyledCol flex="33%">
          <StyledH3>Feautres</StyledH3>
          <StyledLink>Coolections</StyledLink>
          <StyledLink>Bookshelf</StyledLink>
          <StyledLink>Search Engine</StyledLink>
          <StyledLink>Contact</StyledLink>
        </StyledCol>
        <StyledCol flex="33%">
          <StyledH3>Contact & Medias</StyledH3>
          <StyledLink>
            <i className="fab fa-facebook-f" /> <i className="fab fa-twitter" />{' '}
            <i className="fab fa-github" />
          </StyledLink>
          <StyledLink>jan.rapacz@interia.pl</StyledLink>
          <StyledLink>Sucha Beskidzka ul.Magnoliowa 15 </StyledLink>
          <StyledLink>34-200 Poland</StyledLink>
        </StyledCol>
      </StyledWrapper>
      <StyledParagraph>Jan Rapacz &copy; 2019 - 2020</StyledParagraph>
    </StyledFooter>
  );
}
