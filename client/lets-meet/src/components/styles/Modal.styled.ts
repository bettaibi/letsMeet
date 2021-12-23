import styled from "styled-components";
import { fadeIn, slideInRight, slideOutRight } from "./Keyframes";

interface ModalProps{
    show: boolean;
}

export const Modal = styled.div<ModalProps>`
  background-color: #fff;
  min-height: 240px;
  min-width: 280px;
  border-radius: 20px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  z-index: 9999;
  animation: ${({show}) => show? slideInRight: slideOutRight} 0.35s ease-out forwards;
  
`;

export const Overlay = styled.div<ModalProps>`
     display: ${({show}) => show ? 'flex' : 'none'};
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.1);
      z-index: 99;
      align-items: center;
      justify-content: center;
      animation: ${fadeIn} 0.2s ease-in-out forwards;
`;

Modal.defaultProps = {
    show: false,
}