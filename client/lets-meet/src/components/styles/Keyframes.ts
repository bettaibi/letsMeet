import { keyframes } from 'styled-components';

export const slideRight = keyframes`
    from{
        transform: translate(100px, 0);
    }
    to{ 
        transform: translate(0, 0);
    }
`;

export const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{ 
       opacity: 1;
    }
`;