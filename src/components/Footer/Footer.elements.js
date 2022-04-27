import styled from "styled-components"

export const FooterWrapper = styled.footer`
background-color: #101522;
align-items: center;
bottom: 0;
font-size: 3em;
color: #fff;
display: flex;
justify-content: center;
height: 100px;
position: fixed;
width: 100%;
z-index: 1;


@media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
}
`;

export const FooterSocials = styled.div`
display: flex;
justify-content: center;
gap: 8rem;
`;

export const FooterSocialsLink = styled.a`
display: flex;
color: #fff;
`;

