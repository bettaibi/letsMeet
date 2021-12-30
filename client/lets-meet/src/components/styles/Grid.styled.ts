import styled from "styled-components";

interface GridItemProps{
    active?: boolean;
    radius?: string;
    background?: string;
}

interface GridProps{
    gap?: string;
    radius?: string;
}

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(140px, 1fr));
    

    width: 100%;
    height: calc(100vh - 55px);
    overflow: auto;
    padding: 1rem 1rem 0 1rem;
    ${({gap}) => gap && 'gap: '+ gap+';'}

    div{
        ${({radius})=> radius && 'border-radius: '+radius+';'}
    }

 
`;


export const GridItem = styled.div<GridItemProps>`
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
    border: ${({active})=> active ? '1px solid #5764ff': 'none'};
    ${({radius})=> radius && 'border-radius: '+radius+'!important;'}
    background-color: ${({background, theme}) => theme.colors[`${background}`]? theme.colors[`${background}`]: background};
    overflow: hidden;
`;