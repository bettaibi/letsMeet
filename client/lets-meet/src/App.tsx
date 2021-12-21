import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, Box, Typography } from './components/styles';
import { GlobalStyle } from './components/styles/GlobalStyle';

const theme = {
  colors: {
    primary: '#0f172a',
    secondary: '#dadfe5',
    accent: '#f1f5f9',
    info: '#4f46e5',
    muted: '#6c757d'
  },
  mobile: '768'
};

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
      <Box my={2} display='flex' alignItems='center' gap="2rem" justifyContent='center' shadow="lg" radius="20px">
        <Typography color="primary">
          Box 1
        </Typography>
        <Typography as="h4" color="secondary">
          box 2
        </Typography>
        <Typography as="span" color="muted">
          This is a span
        </Typography>
        <Typography as="small" color="accent">
          This is a samll tag
        </Typography>

        <Typography color="primary" as="p">
          lorem ipsum sd,fndsfsdk sdfkdsf dskfksdf
        </Typography>
      </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
