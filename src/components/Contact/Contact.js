import React from "react";
import {
    ContactContainerForm,
    ContactContainerFormInput,
    ContactContainerFormButton,
    ContactWrapper,
    Label,
} from "./Contact.elements"

export const Contact = () => (
<div>
    <ContactWrapper>
            <ContactContainerForm action="">
                <Label>Full Name</Label> 
                <ContactContainerFormInput
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                />
                <Label>Email Address</Label>   
                <ContactContainerFormInput
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />
                <Label>User Information</Label>
                <ContactContainerFormInput
                    type="message"
                    rows="7"
                    placeholder="Your Message"
                    required
                />
                <ContactContainerFormButton>Send Message</ContactContainerFormButton>
            </ContactContainerForm>
    </ContactWrapper>
</div>
)