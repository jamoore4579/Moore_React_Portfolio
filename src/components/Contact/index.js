import React from "react";
//import { validateEmail, validEmail } from "../../utils/helpers";


const ContactInfo = () => {
    return (
        <h2>Contact Information</h2>       
    );
};

export default ContactInfo;

/* <section>
                    <div className="center">
                        <h2 className="page-header">Contact Me</h2>
                    </div>
                    <div>
                        <form id="contact-form">
                            <div>
                                <label htmlFor="Name">Name:</label>
                                <br></br>
                                <input
                                    type="text"
                                    defaultValue={name}
                                    onBlur={handleBlank}
                                    name="Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="Message">Message:</label>
                                <br></br>
                                <textarea
                                    name="Message"
                                    defaultValue={message}
                                    onBlur={handleBlank}
                                    rows="5"
                                />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </section> */

//import React, { useState } from "react";

//function Contact() {
//    const [formState, setFormState] = useState({
//        name: "",
//        email: "",
//        message: "",
//    });
//
//    const [errorMessage, setErrorMessage] = useState("");
//
//    const { name, email, message } = formState;
//
//    function handleChange(e) {
//        if (e.target.name === "email") {
//            const isValid = validateEmail(e.target.value);
//            if (!isValid) {
//                setErrorMessage("Email is invalid");
//            } else {
//                if (!e.target.valule.length) {
//                    setErrorMessage(`${e.target.name} is required`);
//                } else {
//                    setErrorMessage("");
//                }
//            }
//        }
//
//        if (!errorMessage) {
//            setFormState({ ...formState, [e.target.name]: e.target.value })
//        }
//    }

//    function handleBlank(e) {
//        if (e.target.name === "Name" || e.target.name === "Message") {
//            if (!e.target.value.length) {
//                setErrorMessage(`${e.target.name} is required`);
//            } else {
//                setErrorMessage("");
//            }
//        }

//        if (!errorMessage) {
//            setFormState({ ...formState, [e.target.name]: e.target.value });
//        }
//    }