import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Box } from './components/styles/Box.styled';
import { Container } from './components/styles/Container.styled';
import { GlobalStyle } from './components/styles/GlobalStyle';


const theme = {
  colors: {
    primary: '#0f172a',
    secondary: '#dadfe5',
    accent: '#f1f5f9',
    info: '#4f46e5'
  },
  mobile: '768'
};

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box m={4} p={2} display='flex' alignItems='center' justifyContent='center'>
        <div>
          box1
        </div>
        <div>
          box2
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
