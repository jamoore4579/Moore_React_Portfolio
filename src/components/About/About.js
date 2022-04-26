import React from "react";
import { 
    AboutWrapper,
    Image,
} from './About.elements'


export const About = () => {

    const profile = require('../assets/img/self.jpg')

    return (
        <AboutWrapper>
            <Image src={profile} />
        </AboutWrapper>
    )
};