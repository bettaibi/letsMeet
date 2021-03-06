import styled from "styled-components";

interface ButtonProps{
    color: string;
    background: string;
}
interface RoundedButtonProps{
    width: string;
    height: string;
}

export const Button = styled.button<ButtonProps>`
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
    outline: none;
    border-radius: 20px;
    display: inline-block;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 1.5rem;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    transition: transform 0.32s;

    color: ${({color, theme}) => theme.colors[`${color}`]? theme.colors[`${color}`]: color};
    background-color: ${({background, theme}) => theme.colors[`${background}`]? theme.colors[`${background}`]: background};

    &:active{
        transform: scale(0.98);
    }
`;

export const SubButtonLeft = styled(Button)`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

export const SubButtonRight = styled(Button)`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`;

export const RoundedButton = styled(Button)<RoundedButtonProps>`
    width:  ${({width})=> width || '40px'} !important;
    height:  ${({height})=> height || '40px'} !important;
    display: flex !important;
    justify-content:center;
    align-items: center;
`;

export const ActionButton = styled(Button)`
    width:  45px !important;
    height:  45px !important;
    border-radius: 50% !important;
    padding: 0 !important;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
    display: flex !important;
    justify-content:center;
    align-items: center;
    transform: scale(0);
`;