import React from "react";
import { 
  ResumeWrapper,
  ResumeContainer,
  ResumeImage,
  Image,
  ResumeBtnContainer,
  ResumeButton,
  ResumeLink,
} from './Resume.elements';



export const Resume = () => {

    const img = require('../assets/img/Resume.JPG')

    return (
      <ResumeWrapper>
        <ResumeContainer>
          <ResumeImage>
            <Image src={img} />
          </ResumeImage>
        </ResumeContainer>
        <ResumeBtnContainer>
          <ResumeButton>
            <ResumeLink href={require("../assets/img/JasonMoore.pdf")} target="_blank">
              Download Resume
            </ResumeLink>
          </ResumeButton> 
        </ResumeBtnContainer>
      </ResumeWrapper>
      
    )
};