import React from "react";
import { 
    AboutContainer,
    AboutImgSection,
    AboutTextSection,
    AboutText,
    Image,
} from './About.elements'


export const About = () => {

    const profile = require('../assets/img/self.jpg')

    return (
    <div>
        <AboutContainer>
            <AboutImgSection>
                <Image src={profile} />
            </AboutImgSection>
            <AboutTextSection>
                <AboutText>
                <p>WEB DEVELOPER<br></br><br></br>
Operations Professional with excellent communication skills and the ability to work cross-functionally between multiple departments. Will bring a customer focused attitude to work every day and want to make a difference in the success of a company. With over extensive operations and business experience, have developed a strong ability to lead and motivate others to be successful and work as a team.</p>
                </AboutText>
            </AboutTextSection>
        </AboutContainer>
    </div>
    )
};