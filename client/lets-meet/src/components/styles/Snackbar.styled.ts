import styled from 'styled-components';
import { Box } from '.';
import {SacleIn} from './Keyframes';

interface SnackbarProps{
    show: boolean;
}

export const Snackbar = styled(Box)<SnackbarProps>`
    color: white;
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    min-width: 120px;
    display: ${({show}) => show ? 'block': 'none'};
    animation: ${SacleIn} 0.3s ease-in-out forwards;
`;