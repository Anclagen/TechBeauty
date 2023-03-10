import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: var(--primary);
  color: var(--light);
  margin: 0;
  text-align: center;
  padding: 1rem;
`

export const FooterHeading = styled.h2`
  color: var(--light);
  font-size: 2rem;
  font-weight: var(--nav-text-weight);
`

export const FooterLinks = styled(Link)`
  display: block;
  color: var(--light);
  font-size: var(--nav-text-size);
  font-weight: var(--nav-text-weight);
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.75rem;
  @media (min-width: 805px) {
      display: inline-block;
    }

  :hover{
    text-decoration: underline;
  }
`