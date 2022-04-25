import React from "react";
import {
    ProjectWrapper,
    ProjectContainer,
    ProjectItem,
    ProjectItemImageContainer,
    ProjectItemImage,
    ProjectTitle,
    ProjectItemCta,
    ProjectItemLink,
    ProjectItemLinkTwo,

} from "./Projects.elements"

import runbuddy from "../../assets/img/run-buddy.jpg";
import dinnerspinner from "../../assets/img/dinner_spinner.JPG";
import plantpal from "../../assets/img/plant_pal.JPG";
import weather from "../../assets/img/weather.jpg";

const data = [
    {
        id: 1,
        image: runbuddy,
        title: "Run Buddy Project",
    },
    {
        id: 2,
        image: dinnerspinner,
        title: "Dinner Spinner Project",
    },
    {
        id: 3,
        image: plantpal,
        title: "Plant Pal Project",
    },
    {
        id: 4,
        image: weather,
        title: "Weather Dashboard Project",
    },
    {
        id: 5,
        image: weather,
        title: "Weather Dashboard Project",
    },
    {
        id: 6,
        image: plantpal,
        title: "Plant Pal Project",
    },
]

export const Projects = () => (
<div>
    <ProjectWrapper>
        <ProjectContainer>
            {data.map((item) => (
                <ProjectItem key={item.id}>
                    <ProjectItemImageContainer>
                        <ProjectItemImage src={item.image} alt={item.title} />
                    </ProjectItemImageContainer>
                    <ProjectTitle>{item.title}</ProjectTitle>
                    <ProjectItemCta>
                        <ProjectItemLink href="http://github.com" target="_blank">
                            GitHub
                        </ProjectItemLink>
                        <ProjectItemLinkTwo
                            href="http://github.com" target="_blank"
                        >
                            Github
                        </ProjectItemLinkTwo>
                    </ProjectItemCta>
                </ProjectItem>
            ))}
        </ProjectContainer>
    </ProjectWrapper>
</div>
)