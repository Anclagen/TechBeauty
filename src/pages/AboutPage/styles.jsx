import styled from "styled-components";

export const AboutContentWrapper = styled.main`
  max-width: 700px;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.tertiary};
  margin: 110px 2rem 2rem 2rem;

  h1 {
    text-align: center;
  }

  @media (min-width: 700px) {
    margin: 110px auto 2rem auto;
  }
`;
