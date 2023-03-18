import React, { useState } from "react";
import { HeaderStyles, Navigation, NavLinks, MainLinksContainer, ThemeCartContainer, ThemeToggle } from "./styles";
import Cart from "../Cart";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu";
import moonIcon from "../../../assets/moon_icon.jpg";
//import sunIcon from "../../../assets/sun_icon.jpg";

export default function Header() {
  const [display, toggleOpen] = useState("none");
  const [open, setOpen] = useState(false);

  function onButtonClick() {
    toggleOpen(display === "flex" ? "none" : "flex");
    setOpen(!open);
  }

  return (
    <HeaderStyles display={display} open={open}>
      <Navigation>
        <Logo />
        <HamburgerMenu onClick={() => onButtonClick()} open={open} />
        <MainLinksContainer display={display}>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/contact">Contact</NavLinks>
        </MainLinksContainer>
        <ThemeCartContainer>
          <ThemeToggle src={moonIcon} />
          <Cart />
        </ThemeCartContainer>
      </Navigation>
    </HeaderStyles>
  );
}
