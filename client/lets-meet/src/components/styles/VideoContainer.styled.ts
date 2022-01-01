import styled from "styled-components";

interface VideoContainerProps{
    active?: boolean;
    radius?: string;
    background?: string;
    width: string;
    height?: string;
}

export const VideoContainer = styled.div<VideoContainerProps>`
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
    border: ${({active})=> active ? '1px solid #5764ff': 'none'};
    ${({radius})=> radius && 'border-radius: '+radius+'!important;'}
    background-color: ${({background, theme}) => theme.colors[`${background}`]? theme.colors[`${background}`]: background};
    overflow: hidden;
    width: ${({width})=> width};
    min-width: ${({width})=> width};
    height: ${({height})=> height};
    flex: 0 0 auto;
    position: relative;
`;