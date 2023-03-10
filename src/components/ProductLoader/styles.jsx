import styled, {keyframes} from "styled-components";

const ProductLoadingAnimation = keyframes`
  0% {opacity: 35%}
  40%{opacity: 100%}
  60%{opacity: 100%}
  100%{opacity: 35%}
`
export const ProductLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 382px;
  border-radius: 1rem;
  background-color: var(--light);
  box-shadow: var(--card-shadow);
  overflow: hidden;
  animation-name: ${ProductLoadingAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

export const ProductLoaderImage = styled.div`
  width: 300px;
  height: 200px;
  background-color: lightgrey;
  margin-bottom: 1.5rem;
`
export const ProductLoaderHeading = styled.div`
  width: 270px;
  height: 29px;
  border-radius: 1rem;
  background-color: lightgrey;
  margin: 0 auto 19px auto; 
`
export const ProductLoaderPrice = styled.div`
  width: 270px;
  height: 19px;
  border-radius: 1rem;
  background-color: lightgrey;
  margin:  0 auto 16px auto;
`

export const ProductLoaderButton = styled.div`
  width: 102px;
  border-radius: 1rem;
  height: 45px;
  background-color: lightgrey;
  margin:  0 auto 16px auto;
`
