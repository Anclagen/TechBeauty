import styled from "styled-components";
import { StandardButtonLink } from "../styles/Button.styles";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  text-align: center;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.light};
  box-shadow: ${({ theme }) => theme.shadow.cards};
  overflow: hidden;
`;

export const ProductHeading = styled.h2`
  margin-top: 0;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

export const ProductPriceDiscounted = styled.p`
  font-weight: 600;
`;

export const ProductPrice = styled(ProductPriceDiscounted)`
  margin-top: 3.275rem;
`;

export const Savings = styled(ProductPriceDiscounted)`
  padding: 0.125rem;
  background-color: ${({ theme }) => theme.color.secondary};
`;

export const ProductLink = styled(StandardButtonLink)`
  margin: 1rem auto;
`;

export const ProductImageContainer = styled.div`
  position: relative;
  border-radius: 1rem 0 0 1rem;
`;

export const ProductSaleBanner = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.secondary};
  font-size: 1.5rem;
  text-align: center;
  position: absolute;
  top: 10%;
  left: -35%;
  transform: rotate(-40deg);
`;
