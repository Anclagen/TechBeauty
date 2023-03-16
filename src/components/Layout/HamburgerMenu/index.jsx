import { HamburgerIcon, Line } from "./styles";

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
