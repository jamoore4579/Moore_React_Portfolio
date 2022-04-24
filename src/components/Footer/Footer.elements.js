import styled from "styled-components"

export const FooterWrapper = styled.footer`
background: #101522;
padding: 3rem 0;
text-align: center;
font-size: 2rem;
margin-top: 7rem;

a{
    color: #fff;
}

@media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
}
`;

export const FooterSocials = styled.div`
display: flex;
justify-content: center;
gap: 3rem;
`;

export const FooterSocialsLink = styled.a`
display: flex;

* {
    color: #fff;
}
`;

