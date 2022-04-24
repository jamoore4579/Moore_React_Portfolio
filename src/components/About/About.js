import React from "react";

import { 
    AboutSec,
    AboutContainer, 
    AboutRow, 
    AboutColumn, 
    TextWrapper 
} from './About.elements'

//const profile = require('../../assets/img/self.jpg')

const About = ({
    lightBg, 
    imgStart
}) => {
    return (
        <div>
            <AboutSec lightBg={lightBg}>
                <AboutContainer>
                    <AboutRow imgStart={imgStart}>
                        <AboutColumn>
                            <TextWrapper>
                                Home Page
                            </TextWrapper>
                        </AboutColumn>
                    </AboutRow>
                </AboutContainer>
            </AboutSec>
        </div>
    );
};

export default About;