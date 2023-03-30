import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.light};
  margin: 0;
  text-align: center;
  padding: 1rem;
`;

export const FooterHeading = styled.h2`
  color: ${({ theme }) => theme.color.light};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.textWeight.nav};
`;

export const FooterLinks = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.textSize.nav};
  font-weight: ${({ theme }) => theme.textWeight.nav};
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.75rem;
  @media (min-width: 805px) {
    display: inline-block;
  }

  :hover {
    text-decoration: underline;
  }
`;
