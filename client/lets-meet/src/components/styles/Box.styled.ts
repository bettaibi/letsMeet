import styled from 'styled-components';

type displayProps = 'block' | 'inline' | 'inline-block' | 'flex';
type directionProps = 'column' | 'row' | 'row-reverse' | 'row-reverse';
type JustifyContentProps = 'flex-start' | 'flex-end' | 'space-around' | 'center' | 'space-between';
type alignItemsProps = 'flex-start' | 'flex-end' | 'space-around' | 'center' | 'space-between' | 'stretch';

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

    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || 'auto'};
    
    ${({direction}) => direction && 'flex-direction: '+direction+';'}
    ${({justifyContent}) => justifyContent && 'justify-content: '+justifyContent+';'}
    ${({alignItems}) => alignItems && 'align-items: '+ alignItems+';'}

`;