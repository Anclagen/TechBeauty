import React, {useState} from "react";
import { HeaderStyles, Navigation, NavLinks, MainLinksContainer, MenuIcon} from "./styles";
import Cart  from "../Cart";
import Logo  from "../../Logo";


export default function Header() {
  const [display, toggleOpen] = useState("none");
  
  function onButtonClick() {
    toggleOpen(display === "flex" ? "none": "flex")
  }

  return (
    <HeaderStyles display={display}>
      <Navigation>
        <Logo />
        <MenuIcon onClick={() => onButtonClick()}>
          <img src="" alt="Menu Icon" />
        </MenuIcon>
        <MainLinksContainer display={display}>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/contact">Contact</NavLinks>
        </MainLinksContainer>
        <Cart />
      </Navigation>
    </HeaderStyles>
  );
}