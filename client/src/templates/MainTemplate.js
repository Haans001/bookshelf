import React from 'react';
import { ThemeProvider } from 'styled-components';
import SEO from '../components/SEO/SEO';
import GlobalStyle from '../assets/style/GlobalStyle';
import theme from '../assets/style/theme';
import Store from '../store/Store';

const MainTemplate = ({ children }) => {
  return (
    <React.Fragment>
      <Store>
        <SEO />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <React.Fragment>{children}</React.Fragment>
        </ThemeProvider>
      </Store>
    </React.Fragment>
  );
};

export default MainTemplate;
