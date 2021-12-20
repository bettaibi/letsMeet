import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    *{
        box-sizing: border-box;
    }
    html, body {
        margin: 0;
        padding: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
        width: 100%;
        height: 100%;
    }
`;