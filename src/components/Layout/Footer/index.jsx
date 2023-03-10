import { FooterContainer, FooterHeading, FooterLinks } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <FooterHeading>Site Map</FooterHeading>
        <FooterLinks to="/">Home</FooterLinks>
        <FooterLinks to="/">Products</FooterLinks>
        <FooterLinks to="/">Contact</FooterLinks>
        <FooterLinks to="/">Cart</FooterLinks>
        <FooterLinks to="/">About</FooterLinks>
      </div>
      <div>
        <p>Copyright &#169; TechBeauty 2023 </p>
        <p>Created By Alexander Barrett </p>
      </div>
    </FooterContainer>
  );
}