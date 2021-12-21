import styled from 'styled-components';

type colorProps = 'primary' | 'secondary' | 'accent' | 'info' | 'muted';

interface TypographyProps{
    color?: colorProps;
    size?: string;
    
}

export const Typography = styled.h1<TypographyProps>`
    font-family: inherit;

    color: ${({color, theme}) => color? theme.colors[`${color}`]: 'inherit'};
    ${({size}) => size && 'font-size: '+size+';'};
`;