import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const openNavAnimation = keyframes`
  0% {height: 0px}
  100%{height: 87px}
`;

export const HeaderStyles = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.color.primary};
  box-shadow: 0px 3px 10px ${({ theme }) => theme.color.secondary};
  min-height: 85px;
  width: 100%;
  position: fixed;
  z-index: 1000;
`;

export const Navigation = styled.nav`
  font-size: 18px;
  padding-bottom: 10px;
  @media (min-width: 805px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
  }
`;

export const MainLinksContainer = styled.div`
  display: ${(props) => props.display};
  overflow-y: hidden;
  flex-direction: column;
  animation-name: ${openNavAnimation};
  animation-duration: 1s;
  animation-iteration-count: 1;
  @media (min-width: 805px) {
    width: 100%;
    animation-name: none;
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: end;
    width: fit-content;
  }
`;

export const NavLinks = styled(Link)`
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.textSize.nav};
  color: white;
  text-decoration: none;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
`;

export const ThemeCartContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ThemeToggle = styled.img`
  width: 65px;
  height: 65px;
  position: absolute;
  top: 15px;
  right: 195px;
  cursor: pointer;
  @media (min-width: 805px) {
    position: relative;
    top: 5px;
    right: unset;
  }
`;

export const CartIcon = styled(Link)`
  position: absolute;
  padding: 0.5rem;
  top: 10px;
  right: 70px;
  font-size: ${({ theme }) => theme.textSize.nav};
  color: white;
  text-decoration: none;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 805px) {
    position: relative;
    top: unset;
    right: unset;
    margin-right: 1rem;
  }
`;

export const CartImage = styled.img`
  width: 60px;
`;
