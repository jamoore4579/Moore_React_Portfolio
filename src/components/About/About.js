import React from "react";
import { 
    AboutSec,
    AboutContainer, 
    AboutRow, 
    AboutColumn, 
    TextWrapper 
} from './About.elements'

//const profile = require('../../assets/img/self.jpg')

export const About = () => (
<div>
    <AboutSec>
        <AboutContainer>
            <AboutRow>
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