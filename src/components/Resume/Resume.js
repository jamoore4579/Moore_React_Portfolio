import React from "react";
import { 
  ResumeWrapper,
  ResumeContainer,
  ResumeImage,
  ResumeTitle,
  ResumeList,
  ResumeBtnContainer,
  ResumeButton,
  ResumeLink,
} from './Resume.elements';



export const Resume = () => {


    return (
      <ResumeWrapper>
        <ResumeContainer>
          <ResumeImage>
            <ResumeTitle>
              <p>Proficiencies</p><br></br>
            </ResumeTitle>
            <ResumeList>
              <p>HTML/CSS</p><br></br>
              <p>JavaScript</p><br></br>
              <p>Nodde.js</p><br></br>
              <p>Express</p><br></br>
              <p>SQL</p><br></br>
              <p>React</p><br></br>
            </ResumeList>
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