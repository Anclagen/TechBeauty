import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {top: 0px;}
  30% { top: 170px;}
  70% { top: 170px;}
  100% { top: 0px;}
`;

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: darkgreen;
  color: white;
  font-size: 1.25rem;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  z-index: 10;
  box-shadow: ${({ theme }) => theme.shadow.popup};
  animation: ${slideIn} 3s ease-out forwards;
`;
