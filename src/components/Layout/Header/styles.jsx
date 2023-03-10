import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";

const openNavAnimation = keyframes`
  0% {height: 0px}
  100%{height: 165px}
`

export const HeaderStyles = styled.header`
  position: relative;
  background-color: var(--primary);
  box-shadow: 0px 3px 10px var(--secondary);
  min-height: 85px;
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
`

export const MainLinksContainer = styled.div`
    display: ${(props) => props.display };
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
`

export const NavLinks = styled(Link)`
    padding: 0.5rem;
    font-size: var(--nav-text-size);
    color: white;
    text-decoration: none;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-self: center;
    @media (min-width: 768px) {
      margin: 0px 10px;
    }
`

export const MenuIcon = styled.span`
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    font-size: 24px;

    img {
      color:white;
      content: url(data:image/svg+xml,%3Csvg%20height%3D%2232px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M4%2C10h24c1.104%2C0%2C2-0.896%2C2-2s-0.896-2-2-2H4C2.896%2C6%2C2%2C6.896%2C2%2C8S2.896%2C10%2C4%2C10z%20M28%2C14H4c-1.104%2C0-2%2C0.896-2%2C2%20%20s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2S29.104%2C14%2C28%2C14z%20M28%2C22H4c-1.104%2C0-2%2C0.896-2%2C2s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2%20%20S29.104%2C22%2C28%2C22z%22%2F%3E%3C%2Fsvg%3E);
      @media (min-width: 805px) {
        display: none;
      }
    }
`

export const CartIcon = styled(Link)`
    position: absolute;
    padding: 0.5rem;
    top: 10px;
    right: 70px;
    font-size: var(--nav-text-size);
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
`

export const CartImage = styled.img`
  width: 60px;
`