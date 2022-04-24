import styled from "styled-components"

export const ContactWrapper = styled.section.attrs({
    id: "contact",
})`
background: #101522;
`;

export const FirstText = styled.h5``;

export const ContactContainer = styled.div`
width: 58%;
display: grid;
grid-template-columns: 30% 58%;
gap: 12%;

@media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 2rem;
}
`;

export const ContactContainerForm = styled.form`
display: flex;
flex-direction: column;
gap: 1.2rem;
`

export const ContactContainerFormInput = styled.input`
width: 100%;
padding: 1.5rem;
border-radius: 0.5rem;
background: transparent;
border: 2px solid blanchedalmond;
color: #fff;
`

export const ContactContainerFormTextArea = styled.textarea`
width: 100%;
padding: 1.5rem;
border-radius: 0.5rem;
background: transparent;
border: 2px solid black;
color: #fff;
resize: none;
`

export const ContactContainerFormButton = styled.button.attrs({
    type: "submit",
    className: "bnt btn-primary",
})``;