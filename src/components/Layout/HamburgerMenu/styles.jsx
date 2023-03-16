import styled from "styled-components";

export const HamburgerIcon = styled.div`
  position: absolute;
  top: 35px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25px;
  width: 35px;
  cursor: pointer;
  @media (min-width: 805px) {
    display: none;
  }
`;

export const Line = styled.span`
  width: 35px;
  height: 3px;
  background-color: gold;
  transition: transform 0.2s ease-in-out;

  &:first-child {
    transform: ${({ open }) => (open ? "translateY(11px) rotate(45deg)" : "none")};
  }

  &:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
  }

  &:nth-child(3) {
    transform: ${({ open }) => (open ? "translateY(-12px) rotate(-45deg)" : "none")};
  }
`;
