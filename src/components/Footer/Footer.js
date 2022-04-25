import React from "react";
import {
    FooterWrapper,
    FooterSocials,
    FooterSocialsLink
} from "./Footer.elements"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterSocials>
                <FooterSocialsLink href="https://github.com/jamoore4579" target="_blank">
                    <FaGithub />
                </FooterSocialsLink>
                <FooterSocialsLink href="https://www.linkedin.com/in/jason-moore-163a5767/" target="_blank">
                    <FaLinkedin />
                </FooterSocialsLink>
                <FooterSocialsLink href="https://twitter.com/irish_moore5?t=iFZlCc5hc0_7hsdJbgKnHw&s=09" target="_blank">
                    <FaTwitter />
                </FooterSocialsLink>
            </FooterSocials>
        </FooterWrapper>
    )
}

export default Footer;