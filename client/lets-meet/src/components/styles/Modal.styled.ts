import styled from "styled-components";
import { fadeIn, slideRight } from "./Keyframes";

export const Modal = styled.div`

  background-color: #fff;
  min-height: 240px;
  min-width: 280px;
  border-radius: 20px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  z-index: 9999;
  animation: ${slideRight} 0.5s ease-in-out forwards;
`;

export const Overlay = styled.div`

      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.1);
      z-index: 99;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: ${fadeIn} 0.3s ease-in-out;
`;