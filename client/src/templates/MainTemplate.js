import React from 'react';
import { ThemeProvider } from 'styled-components';
import SEO from '../components/SEO/SEO';
import GlobalStyle from '../assets/style/GlobalStyle';
import theme from '../assets/style/theme';
import Store from '../store/Store';
import Preload from './Preload';

function MainTemplate({ children }) {
  return (
    <React.Fragment>
      <Store>
        <Preload>
          <SEO />
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <React.Fragment>{children}</React.Fragment>
          </ThemeProvider>
        </Preload>
      </Store>
    </React.Fragment>
  );
}

export default MainTemplate;
