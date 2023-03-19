import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartIcon = styled.div`
  position: absolute;
  padding: 0.5rem;
  top: 10px;
  right: 70px;

  @media (min-width: 805px) {
    position: relative;
    top: unset;
    right: unset;
    margin-right: 1rem;
  }
`;
export const CartLink = styled(Link)`
  position: relative;
  font-size: ${({ theme }) => theme.textSize.nav};
  color: white;
  text-decoration: ${(props) => (props.current ? "underline" : "none")};
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: "${(props) => props.total}";
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.secondary};
    display: flex;
    text-align: center;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    left: 15%;
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.secondary};
  }
`;

export const CartImage = styled.img`
  width: 60px;
`;

export const CartItemsList = styled.div`
  overflow-y: auto;
  color: black;
  position: absolute;
  top: 90%;
  right: 0%;
  display: none;
  background-color: ${({ theme }) => theme.color.light};
  width: 250px;
  max-width: 350px;
  max-height: 60vh;
  border: 2px solid ${({ theme }) => theme.color.secondary};
  z-index: 100;

  ${CartIcon}:hover & {
    display: block;
  }

  @media (min-width: 805px) {
    width: 450px;
  }
`;

export const CartItemListImage = styled.img`
  width: 60px;
  height: 40px;
  object-fit: cover;
`;
