import styled from 'styled-components';

type displayProps = 'block' | 'inline' | 'inline-block' | 'flex' | 'none';
type directionProps = 'column' | 'row' | 'row-reverse' | 'row-reverse';
type JustifyContentProps = 'flex-start' | 'flex-end' | 'space-around' | 'center' | 'space-between';
type alignItemsProps = 'flex-start' | 'flex-end' | 'space-around' | 'center' | 'space-between' | 'stretch';
type shadowProps = 'sm' | 'md' | 'lg' | 'outlined';
type wrapProps = 'wrap' | 'no-wrap';

interface BoxProps{
    p?: number;
    pt?: number;
    pb?: number;
    pl?: number;
    pr?: number;
    px?: number;
    py?: number;

    m?: number;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    mx?: number;
    my?: number;
    
    width?: string;
    height?: string;

    display?: displayProps;
    direction?: directionProps;
    justifyContent?: JustifyContentProps;
    alignItems?: alignItemsProps;
    gap?: string;
    wrap?: wrapProps;
    flex?: number | string;

    shadow?: shadowProps;
    radius?: string;
    background?: string;

    position?: 'fixed' | 'absolute' | 'relative';
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    zIndex?: number;
}
const baseValue = 8;

export const Box = styled.div<BoxProps>`
    /* Spacing */
    /* Paddings */
    ${({p}) => p && 'padding: '+(p*baseValue)+'px;'}
    ${({pt}) => pt && 'padding-top: '+(pt*baseValue)+'px;'}
    ${({pb}) => pb && 'padding-bottom: '+(pb*baseValue)+'px;'}
    ${({pl}) => pl && 'padding-left: '+(pl*baseValue)+'px;'}
    ${({pr}) => pr && 'padding-right: '+(pr*baseValue)+'px;'}
    ${({px}) => px && 'padding: 0 '+(px*baseValue)+'px;'}
    ${({py}) => py && 'padding: '+(py*baseValue)+'px'+' 0;'}

    /* Margins */
    ${({m}) => m && 'margin: '+(m*baseValue)+'px;'}
    ${({mt}) => mt && 'margin-top: '+(mt*baseValue)+'px;'}
    ${({mb}) => mb && 'margin-bottom: '+(mb*baseValue)+'px;'}
    ${({ml}) => ml && 'margin-left: '+(ml*baseValue)+'px;'}
    ${({mr}) => mr && 'margin-right: '+(mr*baseValue)+'px;'}
    ${({mx}) => mx && 'margin: 0 '+(mx*baseValue)+'px;'}
    ${({my}) => my && 'margin: '+(my*baseValue)+'px'+' 0;'}

    display: ${({display}) => display || 'block'};

    width: ${({width}) => width || 'auto'};
    height: ${({height}) => height || 'auto'};
    
    ${({direction}) => direction && 'flex-direction: '+direction+';'}
    ${({justifyContent}) => justifyContent && 'justify-content: '+justifyContent+';'}
    ${({alignItems}) => alignItems && 'align-items: '+ alignItems+';'}
    ${({gap}) => gap && 'gap: '+ gap+';'}
    ${({wrap}) => wrap && 'flex-wrap: '+ wrap+';'}
    ${({flex}) => flex && 'flex: '+ flex+';'}

    ${({shadow}) => shadow === 'sm'? 'box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);'
                    : shadow === 'md' ?'box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);'
                    : shadow === 'lg' ?'box-shadow: 0 1rem 3rem rgba(0,0,0,.175);'
                    : shadow === 'outlined'? 'border-radius: 4px; border: 1px solid rgba(0, 0, 0, 0.12);'
                    : 'box-shadow: none;'}

    ${({radius})=> radius && 'border-radius: '+radius+';'}

    background-color: ${({background, theme}) => theme.colors[`${background}`]? theme.colors[`${background}`]: background};

    ${({position})=> position && 'position: '+position+';'}
    ${({top})=> top && 'top: '+top+';'}
    ${({bottom})=> bottom && 'bottom: '+bottom+';'}
    ${({left})=> left && 'left: '+left+';'}
    ${({right})=> right && 'right: '+right+';'}
    ${({zIndex})=> zIndex && 'z-index: '+zIndex+';'}

    &.scrolling-wrapper {
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
        
        &::-webkit-scrollbar {
            display: none;
        }
    }

    /* Media */
    @media (max-width: 768px) {
        .flex-sm-column {
            display: flex;
            flex-direction: column;
            gap:1rem;
        }
        .flex-sm-row {
            flex-direction: row;
        }
        .d-sm-none{
            display: none;
        }
        .py-2{
            padding: 1rem 0;
        }
        .text-center{
            text-align: center;
        }
    }
`;