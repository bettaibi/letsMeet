import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/styles/GlobalStyle';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const theme = {
  colors: {
    primary: '#202124',
    secondary: '#dadfe5',
    accent: '#f1f5f9',
    info: '#4f46e5',
    muted: '#6c757d'
  },
  breakpoints: {
    xs: '575.98px',
    sm: '767.98px',
    md: '991.98px',
    lg: '1199.98px',
    xlg: '1399.98px'
  }
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <GlobalStyle />
     <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
