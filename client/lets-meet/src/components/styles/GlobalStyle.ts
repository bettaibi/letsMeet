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

    /* Typography */
    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }
    h1 {
     font-size: 2.5rem;
    }
    h2 {
     font-size: 2rem;
    }
    h3 {
     font-size: 1.75rem;
    }
    h4 {
     font-size: 1.5rem;
    }
    h5 {
     font-size: 1.25rem;
    }
    h6 {
     font-size: 1rem;
    }

    small {
        font-size: 80%;
        font-weight: 400;
    }
    p{
        letter-spacing: 1px;
        line-height: 1.5;
    }

    .m-0{
        margin: 0 !important;
    }
    
`;