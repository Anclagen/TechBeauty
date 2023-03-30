import styled from "styled-components";
import { StandardButton } from "../../components/styles/Button.styles";

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
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
