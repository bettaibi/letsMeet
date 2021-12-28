import { keyframes } from 'styled-components';

export const slideInRight = keyframes`
    from{
        transform: translate(100px, 0);
    }
    to{ 
        transform: translate(0, 0);
    }
`;

export const slideInUp = keyframes`
    from{
        transform: translate(0, 30px);
        opacity:0;
    }
    to{ 
        transform: translate(0, 0);
        opacity: 1;
    }
`;

export const slideOutRight = keyframes`
    0%{
        transform: translate(0, 0);
    }
    99%{
        transform: translate(-100px, 0);
    }
    100%{
        transform: translate(-100px, 0);
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