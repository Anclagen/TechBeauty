import { updateHead } from "../../utilities/updateHead";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContactSuccess, ContactForm, ContactLabel, ContactInput, ContactTextArea, ContactSubmit, ContactErrorReporting, ContactInputContainer, ContactReturnButton } from "./styles";

const schema = yup
  .object({
    fullName: yup.string().trim().min(3, "Full name is required and must be at least 3 characters.").required(),
    Subject: yup.string().trim().min(3, "Subject is required and must be at least 3 characters.").required(),
    Email: yup.string().trim().email().required(),
    Body: yup.string().trim().min(3, "Message is required and must be at least 3 characters.").required(),
  })
  .required();

function ContactPage() {
  updateHead("Contact Us", "Contact TechBeauty with your queries, concerns and suggestions.");
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setSuccess(true);
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  if (success) {
    return (
      <main>
        <ContactForm onSubmit={handleSubmit(onSubmit)}>
          <h1 id="main">Contact Us</h1>
          <ContactSuccess>Submitted Successfully</ContactSuccess>
          <p>
            Thank you for contacting us. Your message has been received and we will respond to you as soon as possible. We appreciate your interest in our services and look forward to connecting with
            you.
          </p>
          <ContactReturnButton to="/">Return to store</ContactReturnButton>
        </ContactForm>
      </main>
    );
  }

  return (
    <main>
      <ContactForm onSubmit={handleSubmit(onSubmit)}>
        <h1 id="main">Contact Us</h1>
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
      </ContactForm>
    </main>
  );
}

export default ContactPage;
