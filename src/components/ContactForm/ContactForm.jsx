import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledContactForm, ContactLabel, ContactInput, ContactTextArea, ContactSubmit, ContactErrorReporting, ContactInputContainer } from "./styles";

/**
 * Creates a contact form with Full Name, Subject, Email, and Message fields. It accepts an onSubmit function as a prop to handle the form submission.
 * @param {Function} onSubmit
 * @returns {JSX.Element} ContactForm
 * @example
 * <ContactForm onSubmit={onSubmit} />
 */
function ContactForm({ onSubmit }) {
  const schema = yup
    .object({
      fullName: yup.string().trim().min(3, "Full name is required and must be at least 3 characters.").required(),
      Subject: yup.string().trim().min(3, "Subject is required and must be at least 3 characters.").required(),
      Email: yup.string().trim().email().required(),
      Body: yup.string().trim().min(3, "Message is required and must be at least 3 characters.").required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //reset form if submission is successful
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
      <ContactInputContainer>
        <ContactLabel htmlFor="full-name">Full Name</ContactLabel>
        <ContactInput id="full-name" {...register("fullName")} />
        <ContactErrorReporting>{errors.fullName?.message}</ContactErrorReporting>
      </ContactInputContainer>
      <ContactInputContainer>
        <ContactLabel htmlFor="subject">Subject</ContactLabel>
        <ContactInput id="subject" {...register("Subject")} />
        <ContactErrorReporting>{errors.Subject?.message}</ContactErrorReporting>
      </ContactInputContainer>
      <ContactInputContainer>
        <ContactLabel htmlFor="email">Email</ContactLabel>
        <ContactInput id="email" {...register("Email")} />
        <ContactErrorReporting>{errors.Email?.message}</ContactErrorReporting>
      </ContactInputContainer>
      <ContactInputContainer>
        <ContactLabel htmlFor="body">Message</ContactLabel>
        <ContactTextArea rows="5" id="body" {...register("Body")} />
        <ContactErrorReporting>{errors.Body?.message}</ContactErrorReporting>
      </ContactInputContainer>
      <ContactSubmit type="submit">Submit</ContactSubmit>
    </StyledContactForm>
  );
}

export default ContactForm;
