import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import M from 'materialize-css';
import SEO from '../components/SEO/SEO';
import GlobalStyle from '../assets/style/GlobalStyle';
import theme from '../assets/style/theme';
import Store from '../store/Store';
import Preload from './Preload';

function MainTemplate({ children }) {
  useEffect(() => {
    return () => {
      M.AutoInit();
    };
  });
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
