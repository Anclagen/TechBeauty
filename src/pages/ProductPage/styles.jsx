import styled from "styled-components";
import { StandardButton } from "../../components/styles/Button.styles";

export const Wrapper = styled.main`
  margin: 90px auto 2rem auto;
  padding: 0 0.125rem;

  @media (min-width: 400px) {
    padding: 0 1rem;
  }

  @media (min-width: 700px) {
    padding: 0 2rem;
    max-width: 1100px;
  }
`;

export const Heading1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  @media (min-width: 700px) {
    font-size: 2rem;
  }
`;

export const RatingLink = styled.a`
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
export const PageGrid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 2rem;
  margin: 0 auto;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.tertiary};
  overflow: hidden;
  border-radius: 3rem;
  height: fit-content;
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: contain;
  height: 400px;
  @media (min-width: 700px) {
    height: 40vw;
    max-height: 500px;
  }
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

export const DetailsContainer = styled.div``;

export const Heading2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const CurrentPrice = styled.p`
  font-weight: 600;
`;

export const PreviousPrice = styled.p``;

export const PreviousPriceAmount = styled.span`
  text-decoration: line-through;
  font-style: italic;
`;

export const ButtonAddCart = styled(StandardButton)`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.125rem;
  background-color: green;
  color: white;
  margin-bottom: 1rem;
  border: 1px solid green;
  :hover {
    background-color: white;
    color: green;
  }
`;

export const IconImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const Divider = styled.hr`
  color: ${({ theme }) => theme.color.secondary};
  margin: 2rem 0;
`;
