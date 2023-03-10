import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  text-align: center;
  border-radius: 1rem;
  background-color: var(--light);
  box-shadow: var(--card-shadow);
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

export const ProductLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: black;
  font-weight: 600;
  padding: 0.8rem;
  width: fit-content;

  margin: 1rem auto;
  background-color: var(--secondary);
  transition: all 0.5s;
  border-radius: 1rem;
  box-sizing: border-box;
  :hover {
    background-color: white;
    border: 1px solid var(--secondary);
  }
`;

export const ProductPrice = styled.p``;

export const ProductDiscounted = styled.span``;
