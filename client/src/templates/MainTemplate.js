import React from 'react';
import { ThemeProvider } from 'styled-components';
import SEO from '../components/SEO/SEO';
import GlobalStyle from '../assets/style/GlobalStyle';
import theme from '../assets/style/theme';

const MainTemplate = ({ children }) => {
  return (
    <React.Fragment>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <React.Fragment>{children}</React.Fragment>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MainTemplate;
