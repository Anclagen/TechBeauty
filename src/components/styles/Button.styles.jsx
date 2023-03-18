import { Link } from "react-router-dom";
import styled from "styled-components";

export const StandardButtonLink = styled(Link)`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
  font-weight: 600;
  padding: 0.8rem;
  width: fit-content;
  background-color: ${({ theme }) => theme.color.secondary};
  transition: all 0.5s;
  border-radius: 1rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  :hover {
    background-color: ${({ theme }) => theme.color.light};
  }
`;

export const StandardButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
  padding: 0.8rem;
  width: fit-content;
  background-color: ${({ theme }) => theme.color.secondary};
  transition: all 0.5s;
  border-radius: 1rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  :hover {
    background-color: ${({ theme }) => theme.color.light};
  }
`;
