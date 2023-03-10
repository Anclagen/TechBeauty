import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  text-decoration: none;
    display: flex;
    align-items: center;
`

export const LogoImg = styled.img`
  max-width: 80px;
  margin: auto 1rem auto 0.5rem;
`
export const LogoText = styled.span`
display: none;
color: var(--secondary);
font-size: 1.75rem;
@media (min-width: 460px) {
      display: block;
    }
`