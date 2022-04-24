import React from "react";
import { Container } from "../../globalStyles";
import { 
    AboutSec, 
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
                <Container>
                    <AboutRow imgStart={imgStart}>
                        <AboutColumn>
                            <TextWrapper>
                                Home Page
                            </TextWrapper>
                        </AboutColumn>
                    </AboutRow>
                </Container>
            </AboutSec>
        </div>
    );
};

export default About;