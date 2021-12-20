import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import { GlobalStyle } from './components/styles/GlobalStyle';


const theme = {
  colors: {
    primary: 'green',

  }
};

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Container bg='#fafafa'>
        <p>
          React App version 2
        </p>

        <span>This is a nesting span</span>
      </Container>
    </ThemeProvider>
  );
}

export default App;
