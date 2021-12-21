import styled from 'styled-components';

type breakpointProps = 'gtXs' | 'gtSm' | 'gtMd' | 'xs' | 'sm' | 'md' | 'lg' | 'xlg' ;
interface HiddenProps{
    breakpoint: breakpointProps;
}

export const Hidden = styled.div<HiddenProps>`

// X-Small devices (portrait phones, less than 576px)
@media (max-width: ${({theme})=> theme.breakpoints.xs}) {

    ${({breakpoint}) => breakpoint === 'gtXs'? 'display: block'
                        : breakpoint === 'gtSm'? 'display: block !important;'
                        : breakpoint === 'gtMd'? 'display: block !important;'
                        : breakpoint === 'xs'? 'display: none !important;'
                        :  'display: none !important;'}

    background-color: red;

}

// Small devices (landscape phones, less than 768px)
@media (max-width: ${({theme})=> theme.breakpoints.sm}) {

    ${({breakpoint}) => breakpoint === 'gtXs'? 'display: none !important;'
                        : breakpoint === 'gtSm'? 'display: block !important;'
                        : breakpoint === 'gtMd'? 'display: block !important;'
                        : breakpoint === 'sm'? 'display: none !important;'
                        :  'display: none !important;'}
}

// Medium devices (tablets, less than 992px)
@media (max-width: ${({theme})=> theme.breakpoints.md}) {
    ${({breakpoint}) => breakpoint === 'gtXs'? 'display: none !important;'
                        : breakpoint === 'gtSm'? 'display: none !important;'
                        : breakpoint === 'gtMd'? 'display: block !important;'
                        : breakpoint === 'md'? 'display: none !important;'
                        :  'display: none !important;'}
}

// Large devices (desktops, less than 1200px)
@media (max-width: ${({theme})=> theme.breakpoints.lg}) {
    ${({breakpoint}) => breakpoint === 'gtXs'? 'display: none !important;'
                        : breakpoint === 'gtSm'? 'display: none !important;'
                        : breakpoint === 'gtMd'? 'display: none !important;'
                        : breakpoint === 'lg'? 'display: none !important;'
                        : breakpoint === 'xlg'? 'display: block !important;'
                        :  'display: none !important;'}
}

// X-Large devices (large desktops, less than 1400px)
@media (max-width: ${({theme})=> theme.breakpoints.xlg}) {
    
}

`;
