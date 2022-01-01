import styled from "styled-components";
import { slideInRight } from "./Keyframes";

export const Sidenav = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  background-color: #fff;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 20px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  z-index: 9999;
  animation: ${slideInRight} 0.35s ease-out forwards;
`;