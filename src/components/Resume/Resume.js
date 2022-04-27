import React from "react";
import { 
  ResumeWrapper,
  ResumeContainer,
  ResumeImage,
  Image,
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
      </ResumeWrapper>
    )
};

//<ResumeButton>
  //          <ResumeLink href={require("../assets/img/JasonMoore.pdf")} target="_blank">
    //          Download Resume
      //      </ResumeLink>
        //  </ResumeButton>