import styled from 'styled-components';
import { Box } from '.';
import { slideInUp } from './Keyframes';

export const Dropdown = styled(Box)`
    animation: ${slideInUp} 0.25s ease-out forwards;
`;