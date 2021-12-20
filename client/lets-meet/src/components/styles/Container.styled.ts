import styled from "styled-components";

interface ContainerProps{
    bg: string;
}
export const Container = styled.div<ContainerProps>`
    width: 1000px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    background-color: ${(props)=> props.bg};

    /* Nesting tags */
    span{
        color: red;
    }
    /* States */
    &:hover{
        background-color: ${({theme}) => theme.colors.primary};
    }
`;