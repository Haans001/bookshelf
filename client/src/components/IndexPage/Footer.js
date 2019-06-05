import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 50px 0;
`;
const StyledArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: white;
  padding: 10px;

  a {
    color: white;
    position: relative;
    &::after {
      content: '';
      height: 3px;
      background-color: white;
      width: 0%;
      position: absolute;
      left: 0;
      bottom: 0;
      transition: 0.3s ease-in-out;
    }

    &:hover ::after {
      width: 100%;
    }
  }
`;
const StyledH3 = styled.h3`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding-bottom: 10px;
`;

const StyledParagraph = styled.p`
  text-align: center;
  border-top: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

const MediasContainer = styled.div`
  i {
    margin: 0 20px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter className="blue-grey darken-4">
      <div className="container">
        <div className="row">
          <div className="col s12 m4">
            <StyledArticle>
              <StyledH3>
                Bookphiles <i className="fas fa-book-open" />
              </StyledH3>
              <Link to="/">Home</Link>
              <Link to="/">About</Link>
              <Link to="/">Apps</Link>
              <Link to="/">Contact</Link>
            </StyledArticle>
          </div>
          <div className="col s12 m4">
            <StyledArticle>
              <StyledH3>Features</StyledH3>
              <Link to="/">Collections</Link>
              <Link to="/">Bookshelf</Link>
              <Link to="/">Search</Link>
              <Link to="/">Contact</Link>
            </StyledArticle>
          </div>
          <div className="col s12 m4">
            <StyledArticle>
              <StyledH3>Contact & Medias</StyledH3>
              <MediasContainer>
                <i className="fab fa-facebook-f" />
                <i className="fab fa-twitter" />
                <i className="fab fa-github" />
              </MediasContainer>
              <Link to="/">jan.rapacz@interia.pl</Link>
              <Link to="/">Sucha Beskidzka Magnoliowa15</Link>
              <Link to="/">34-200 Poland</Link>
            </StyledArticle>
          </div>
        </div>
      </div>
    </StyledFooter>
    // <StyledFooter>
    //   <StyledWrapper>
    //     <StyledCol flex={1}>
    //       <StyledH3>
    //         Bookphiles <i className="fas fa-book-open" />
    //       </StyledH3>
    //       <StyledLink>Home</StyledLink>
    //       <StyledLink>About</StyledLink>
    //       <StyledLink>Apps</StyledLink>
    //       <StyledLink>Contact</StyledLink>
    //     </StyledCol>
    //     <StyledCol flex={1}>
    //       <StyledH3>Feautres</StyledH3>
    //       <StyledLink>Coolections</StyledLink>
    //       <StyledLink>Bookshelf</StyledLink>
    //       <StyledLink>Search Engine</StyledLink>
    //       <StyledLink>Contact</StyledLink>
    //     </StyledCol>
    //     <StyledCol flex={1}>
    //       <StyledH3>Contact & Medias</StyledH3>
    //       <StyledLink>
    //         <i className="fab fa-facebook-f" /> <i className="fab fa-twitter" />{' '}
    //         <i className="fab fa-github" />
    //       </StyledLink>
    //       <StyledLink>jan.rapacz@interia.pl</StyledLink>
    //       <StyledLink>Sucha Beskidzka ul.Magnoliowa 15 </StyledLink>
    //       <StyledLink>34-200 Poland</StyledLink>
    //     </StyledCol>
    //   </StyledWrapper>
    //   <StyledParagraph>Jan Rapacz &copy; 2019 - 2020</StyledParagraph>
    // </StyledFooter>
  );
}
