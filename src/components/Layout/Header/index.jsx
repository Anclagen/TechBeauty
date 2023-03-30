import React, { useState } from "react";
//import { HeaderStyles, Navigation, NavLinks, MainLinksContainer, ThemeCartContainer, ThemeToggle } from "./styles";
import { HeaderStyles, Navigation, NavLinks, MainLinksContainer, ThemeCartContainer, NavSkip } from "./styles";
import Cart from "../Cart";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu";
import { useLocation } from "react-router-dom";
//import moonIcon from "../../../assets/moon_icon.jpg";
//import sunIcon from "../../../assets/sun_icon.jpg";

/**
 * Header component for page, containing navigation.
 * @returns {JSX.Element} Header component
 */
export default function Header() {
  const [display, toggleOpen] = useState("none");
  const [open, setOpen] = useState(false);

  function onButtonClick() {
    toggleOpen(display === "flex" ? "none" : "flex");
    setOpen(!open);
  }

  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <HeaderStyles display={display} open={open}>
      <Navigation>
        <NavSkip href="#main">Skip to Main Content</NavSkip>
        <Logo />
        <HamburgerMenu onClick={() => onButtonClick()} open={open} />
        <MainLinksContainer display={display}>
          <NavLinks current={currentLocation === "/" ? "underline" : "none"} to="/">
            Home
          </NavLinks>
          <NavLinks current={currentLocation === "/contact" ? "underline" : "none"} to="/contact">
            Contact
          </NavLinks>
          <NavLinks current={currentLocation === "/about" ? "underline" : "none"} to="/about">
            About
          </NavLinks>
        </MainLinksContainer>
        <ThemeCartContainer>
          {/* <ThemeToggle src={moonIcon} /> */}
          <Cart currentLocation={currentLocation} />
        </ThemeCartContainer>
      </Navigation>
    </HeaderStyles>
  );
}
