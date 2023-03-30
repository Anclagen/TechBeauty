import { updateHead } from "../../utilities/updateHead";
import React, { useState } from "react";
import { ContactSuccess, ContactFormContainer, ContactReturnButton } from "./styles";
import ContactForm from "../../components/ContactForm/ContactForm";

/**
 * Creates Contact page
 * @returns {JSX.Element} Contact page
 */
function ContactPage() {
  updateHead("Contact Us", "Contact TechBeauty with your queries, concerns and suggestions.");
  // state to track if form is submitted successfully
  const [success, setSuccess] = useState(false);

  // submit form data
  function onSubmit(data) {
    console.log(data);
    setSuccess(true);
  }

  // if form is submitted successfully, show success message
  if (success) {
    return (
      <main>
        <ContactFormContainer>
          <h1 id="main">Contact Us</h1>
          <ContactSuccess>Submitted Successfully</ContactSuccess>
          <p>
            Thank you for contacting us. Your message has been received and we will respond to you as soon as possible. We appreciate your interest in our services and look forward to connecting with
            you.
          </p>
          <ContactReturnButton to="/">Return to store</ContactReturnButton>
        </ContactFormContainer>
      </main>
    );
  }

  // Render contact form
  return (
    <main>
      <ContactFormContainer>
        <h1 id="main">Contact Us</h1>
        <ContactForm onSubmit={onSubmit} />
      </ContactFormContainer>
    </main>
  );
}

export default ContactPage;
