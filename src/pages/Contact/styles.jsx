import styled from "styled-components";
import { StandardButtonLink } from "../../components/styles/Button.styles";

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.tertiary};
  margin: 2rem auto 2rem auto;

  h1 {
    text-align: center;
  }
`;

export const ContactSuccess = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: darkgreen;
  margin: 1rem 0;
`;

export const ContactReturnButton = styled(StandardButtonLink)`
  align-self: center;
  margin-top: 2rem;
`;
