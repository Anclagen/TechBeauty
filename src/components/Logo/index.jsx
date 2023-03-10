import mainLogo from'../../assets/logo_ecom.png';
import { LogoImg, LogoLink, LogoText } from './styles';

export default function Logo() {
  return (
    <LogoLink to="/">
      <LogoImg src={mainLogo} alt="TechBeauty Logo"/>
      <LogoText>TechBeauty</LogoText>
    </LogoLink>
    
  )
}
