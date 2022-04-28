import React, { useState }from "react";
import { validateEmail } from '../../utils/helpers';
import {
    ContactWrapper,
    ContactContainerForm,
    ContactContainerFormInput,
    ContactContainerFormButton,
    Label,
} from "./Contact.elements"

export const Contact = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} Message is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };

    return (

    <div>
        <ContactWrapper>
        <ContactContainerForm onSubmit={handleSubmit}>
                <Label>Full Name</Label> 
                <ContactContainerFormInput
                    type="text"
                    name="name"
                    defaultValue={name} 
                    onBlur={handleChange}
                />
                <Label>Email Address</Label>   
                <ContactContainerFormInput
                    type="email"
                    name="email"
                    defaultValue={email} 
                    onBlur={handleChange}
                />
                <Label>User Information</Label>
                <ContactContainerFormInput
                    type="message"
                    rows="7"
                    defaultValue={message} 
                    onBlur={handleChange}
                />
                <p>{errorMessage}</p>
                <ContactContainerFormButton>Send Message</ContactContainerFormButton>
            </ContactContainerForm>  
        </ContactWrapper>
    </div>
    )
};