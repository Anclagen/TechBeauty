import styled from "styled-components";

export const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1800px;
  padding: 1rem;
  `

export const Main = styled.main`
margin: 0 auto;
`

export const Banner = styled.img`
  width: 100%;
  max-width: 1900px;
  display: block;
  margin: 0 auto;
  box-shadow: inset 40px 0 40px -16px, inset -40px 0 40px -16px;
`

export const HomeHeading = styled.h1`
  font-size: 3rem;
  text-align: center;
`



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
    grid-template-columns: repeat(5, minmax(0, 1fr));;
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
`
export const Filter = styled.select`
  font-size: 1.25rem;
  margin: 1rem;
  margin-top: 0;
  min-width: 230px;
`

export const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`