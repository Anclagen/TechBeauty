import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  width: fit-content;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  max-width: 70px;
  margin: 10px 1rem auto 0.5rem;
  @media (min-width: 805px) {
    margin: auto 1rem auto 0.5rem;
    max-width: 80px;
  }
`;
export const LogoText = styled.span`
  display: none;
  color: ${({ theme }) => theme.color.secondary};
  font-size: 1.75rem;
  @media (min-width: 550px) {
    display: block;
  }
`;
