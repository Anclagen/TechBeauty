import styled from "styled-components";

export const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1800px;
  padding: 1rem;
`;

export const Main = styled.main`
  position: relative;
  margin: 86px auto 0 auto;
  width: 100%;
`;
export const HomeHeading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  background-color: ${({ theme }) => theme.color.secondary};
  margin: 0;
  padding: 0.75rem 0;
`;

//might want to put this elsewhere
export const ProductGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
  max-width: 280px;
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

export const FilterContainer = styled.div`
  margin: 0 auto;
  max-width: 280px;
  @media (min-width: 700px) {
    max-width: 640px;
  }
  @media (min-width: 1050px) {
    max-width: 990px;
  }
  @media (min-width: 1390px) {
    max-width: 1350px;
  }
  @media (min-width: 1750px) {
    max-width: 1750px;
  }
`;
export const Filter = styled.select`
  font-size: 1.25rem;
  margin: 1rem;
  margin-top: 0;
  min-width: 230px;
`;

export const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
