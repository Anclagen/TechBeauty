import mainLogo from "../../../assets/logo_ecom.png";
import { LogoImg, LogoLink, LogoText } from "./styles";

/**
 * Creates the logo link to home page.
 * @return {JSX.Element} Logo link
 */
export default function Logo() {
  return (
    <LogoLink to="/">
      <LogoImg src={mainLogo} alt="TechBeauty Logo" />
      <LogoText>TechBeauty</LogoText>
    </LogoLink>
  );
}
