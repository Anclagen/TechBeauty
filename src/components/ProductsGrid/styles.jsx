import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
  max-width: 300px;
  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 640px;
  }

  @media (min-width: 1050px) {
    max-width: 990px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1390px) {
    max-width: 1350px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 1750px) {
    max-width: 1750px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
