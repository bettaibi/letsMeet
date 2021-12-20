import { keyframes } from 'styled-components';

export const slideLeft = keyframes`
    from{
        transform: translate(0, 0);
    }
    to{ 
        transform: translate(200px, 0);
    }
`;