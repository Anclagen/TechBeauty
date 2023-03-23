import styled from "styled-components";
import { StandardButton, StandardButtonLink } from "../../components/styles/Button.styles";

export const ContactForm = styled.form`
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

export const ContactInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactLabel = styled.label`
  width: fit-content;
  margin: 0 0.5rem 0.25rem 0.5rem;
`;

export const ContactInput = styled.input`
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px ${({ theme }) => theme.color.secondary};
  font-size: 1.25rem;
`;

export const ContactTextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px ${({ theme }) => theme.color.secondary};
  font-size: 1.25rem;
  resize: none;
`;

export const ContactErrorReporting = styled.p`
  color: darkred;
`;

export const ContactSubmit = styled(StandardButton)`
  width: 100%;
  font-size: 1.25rem;
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
