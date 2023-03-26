import { FooterContainer, FooterHeading, FooterLinks } from "./styles";

/**
 * Creates the Footer element, with site map and copyright.
 * @return {JSX.Element} Footer element and site map
 */
export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <FooterHeading>Site Map</FooterHeading>
        <FooterLinks to="/">Home</FooterLinks>
        <FooterLinks to="/contact">Contact</FooterLinks>
        <FooterLinks to="/cart">Cart</FooterLinks>
        <FooterLinks to="/about">About</FooterLinks>
      </div>
      <div>
        <p>Copyright &#169; TechBeauty 2023 </p>
        <p>Created By Alexander Barrett </p>
      </div>
    </FooterContainer>
  );
}
