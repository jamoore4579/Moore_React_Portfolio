import React from "react";
import {
    ContactContainer,
    ContactContainerForm,
    ContactContainerFormInput,
    ContactContainerFormButton,
    ContactWrapper,
    FirstText,
} from "./Contact.elements"

const Contact = () => {
    return (
        <ContactWrapper>
            <FirstText>Let's Connect</FirstText>
            <ContactContainer>
                <ContactContainerForm action="">
                    <ContactContainerFormInput
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />   
                    <ContactContainerFormInput
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <ContactContainerFormInput
                        type="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    />
                    <ContactContainerFormButton>Send Message</ContactContainerFormButton>
                </ContactContainerForm>
            </ContactContainer>
        </ContactWrapper>
    )
}

export default Contact;