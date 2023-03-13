import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.main`
  width: auto;
  margin: 90px auto 2rem auto;
  padding: 0 1rem;
  max-width: 1000px;
  @media (min-width: 700px) {
    width: 80%;
    padding: 0 2rem;
  }
`;

export const CartGrid = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 5fr 3fr;
  }
`;

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  margin-bottom: -1px;
  gap: 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  align-items: center;
  width: 100%;
`;

export const CartItemImageContainer = styled.div`
  background-color: var(--tertiary);
  width: 80px;
  height: 70px;
  overflow: hidden;
`;

export const CartItemDetailsContainer = styled.div`
  margin: 0 1rem;
`;

export const CartItemTitle = styled.h3`
  font-size: 1rem;
  margin-top: 1rem;
`;

export const CartItemImage = styled.img`
  width: 80px;
  height: 70px;
  object-fit: cover;
`;

export const CartItemPriceContainer = styled.div`
  width: 140px;
`;

export const QuantityButton = styled.button`
  background-color: var(--tertiary);
  border: 1px solid var(--secondary);
  width: 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  padding: 0.5rem;
  text-align: center;

  :hover {
    background-color: var(--secondary);
    border: 1px solid var(--tertiary);
    cursor: pointer;
  }
`;

export const RemoveButton = styled.button`
  background-color: var(--tertiary);
  border: 1px solid var(--secondary);
  border-radius: 0.5rem;
  padding: 0.5rem;
  float: right;
  :hover {
    background-color: var(--secondary);
    border: 1px solid var(--tertiary);
    cursor: pointer;
  }
`;

export const CartCheckoutSection = styled.section`
  position: relative;
  height: 100%;
  margin-top: 1rem;
  @media (min-width: 700px) {
    margin-top: 0;
    padding: 1rem;
  }
`;

export const CartCheckoutDetails = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--tertiary);
  @media (min-width: 700px) {
    position: fixed;
  }
`;

export const CartCheckoutButton = styled(Link)`
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 1.125rem;
  background-color: var(--secondary);
  text-align: center;
  text-decoration: none;
  color: black;
  margin-top: 2rem;
`;
