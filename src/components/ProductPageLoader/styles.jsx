import styled, { keyframes } from "styled-components";

const ProductLoadingAnimation = keyframes`
  0% {opacity: 35%}
  40%{opacity: 100%}
  60%{opacity: 100%}
  100%{opacity: 35%}
`;

export const ImageLoader = styled.div`
  background-color: ${({ theme }) => theme.color.tertiary};
  width: 90vw;
  max-width: 500px;
  border-radius: 3rem;
  height: 400px;
  @media (min-width: 700px) {
    width: 45vw;
    height: 40vw;
    max-height: 600px;
  }
  animation-name: ${ProductLoadingAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

export const ContentLoader = styled.div`
  width: 90vw;
  max-width: 500px;
  @media (min-width: 700px) {
    width: 45vw;
  }
`;

export const HeadingLoader = styled.div`
  height: 1.5rem;
  border-radius: 1rem;
  margin: 1rem auto;
  background-color: ${({ theme }) => theme.color.tertiary};
  animation-name: ${ProductLoadingAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  @media (min-width: 700px) {
    width: 90%;
    margin: 1.25rem auto;
    height: 2rem;
  }
`;

export const DescriptionLoader = styled(HeadingLoader)`
  height: 4rem;
  @media (min-width: 700px) {
  }
`;

export const PriceLoader = styled(HeadingLoader)`
  height: 1.25rem;
`;

export const ButtonLoader = styled(HeadingLoader)`
  height: 4.5rem;
`;

export const DividerLoader = styled.hr`
  color: ${({ theme }) => theme.color.secondary};
  margin: 2rem 0;
`;
