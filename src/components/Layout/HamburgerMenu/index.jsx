import { HamburgerIcon, Line } from "./styles";

/**
 * Animated hamburger icon on mobile
 * @param {Boolean} open is the menu open
 * @param {Function} onClick function to open close menu
 * @returns {JSX.Element} Hamburger icon
 */
export default function HamburgerMenu({ open, onClick }) {
  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  }

  return (
    <HamburgerIcon onClick={onClick} onKeyDown={handleKeyDown} aria-label="Toggle menu" role="button" tabIndex={0} title="Toggle menu">
      <Line open={open} />
      <Line open={open} />
      <Line open={open} />
    </HamburgerIcon>
  );
}
