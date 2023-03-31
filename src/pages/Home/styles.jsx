import styled from "styled-components";

export const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1800px;
  padding-bottom: 2rem;
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
  border-radius: 1rem;
  margin: 0 1rem 1rem auto;
  min-width: 180px;
  border-color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.tertiary};
  padding-left: 1rem;
  @media (min-width: 700px) {
    float: right;
  }
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
