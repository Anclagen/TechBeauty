import styled from "styled-components";
import { StandardButtonLink } from "../../components/styles/Button.styles";

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

export const EmptyCart = styled(Wrapper)`
  text-align: center;
`;

export const ReturnButton = styled(StandardButtonLink)`
  margin-top: 2rem;
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
  @media (min-width: 800px) {
    grid-template-columns: 100px 1fr;
  }

  @media (min-width: 800px) {
    grid-template-columns: 150px 1fr;
  }
`;

export const CartItemImageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.tertiary};
  width: 100%;
  height: 70px;
  overflow: hidden;
  @media (min-width: 800px) {
    height: 130px;
  }
`;

export const CartItemDetailsContainer = styled.div`
  margin: 0 1rem;
`;

export const CartItemTitle = styled.h3`
  font-size: 1rem;
  margin-top: 1rem;
`;

export const CartItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CartItemPriceContainer = styled.div`
  width: 140px;
`;

export const QuantityButton = styled.button`
  background-color: ${({ theme }) => theme.color.tertiary};
  border: 1px solid ${({ theme }) => theme.color.secondary};
  width: 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  padding: 0.5rem;
  text-align: center;
  transition: all 0.5s;
  margin: 0 0.25rem;
  :hover {
    background-color: ${({ theme }) => theme.color.secondary};
    border: 1px solid ${({ theme }) => theme.color.tertiary};
    cursor: pointer;
  }
`;

export const RemoveButton = styled(QuantityButton)`
  background-color: #c78080;
  border: 1px solid darkred;
  float: right;
  width: auto;
  margin-bottom: 0.5rem;
  :hover {
    color: white;
    background-color: darkred;
    border: 1px solid #c78080;
    cursor: pointer;
  }

  @media (min-width: 900px) {
    margin-top: -3rem;
  }
`;

export const ClearCartButton = styled(RemoveButton)`
  margin: 1rem;
  background-color: darkred;
  color: white;
  border: 1px solid darkred;
  :hover {
    border: 1px solid darkred;
    color: black;
    background-color: ${({ theme }) => theme.color.light};
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
  background-color: ${({ theme }) => theme.color.tertiary};
  @media (min-width: 700px) {
    position: fixed;
  }
`;

export const CartCheckoutButton = styled(StandardButtonLink)`
  width: 100%;
  font-size: 1.125rem;
  text-align: center;
  :hover {
    background-color: ${({ theme }) => theme.color.tertiary};
  }
`;
