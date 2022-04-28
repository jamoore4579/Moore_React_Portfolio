import styled from "styled-components"

export const ContactWrapper = styled.section`
background-color: #101522;
width: 100%;
min-height: 90vh;
display: flex;
justify-content: center;
align-items: center;
padding: 0 20px;
`;

export const ContactContainerForm = styled.form`
width: 100%;
max-width: 700px;
padding: 30px;
background-color: #fff;
border-radius: 10px;
box-sizing: border-box;
`;

export const ContactContainerFormInput = styled.input`
width: 100%;
margin:  5px auto;
padding: 1.5rem;
border-radius: 0.5rem;
background: transparent;
border: 2px solid black;
color: #000000;
`;

export const ContactContainerFormTextArea = styled.textarea`
width: 100%;
padding: 1.5rem;
border-radius: 0.5rem;
background: transparent;
border: 2px solid black;
color: #fff;
resize: none;
`

export const ContactContainerFormButton = styled.button`
background-color: #3498db;
color:#fff;
border: 1px solid #3498db;
border-radius: 4px;
display: block;
margin: 8px auto 0 auto;
height: 40px;
font-size: 1rem;
padding: 5px 30px;
cursor: pointer;
`;

export const Label = styled.label`
font-size: 20px;
font-weight: bold;
`;