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

} from "./Portfolio.elements"

import runbuddy from "../assets/img/run-buddy.jpg";
import dinnerspinner from "../assets/img/dinner_spinner.JPG";
import plantpal from "../assets/img/plant_pal.JPG";
import weather from "../assets/img/weather.jpg";
import notetaker from "../assets/img/NoteTaker.JPG"
import workschedule from "../assets/img/WorkScheduler.JPG"

const data = [
    {
        id: 1,
        image: runbuddy,
        title: "Run Buddy Project",
        link: "http://jamoore4579.github.io/Run-Buddy-Repo/",
        gitlink: "https://github.com/jamoore4579/Run-Buddy-Repo",
    },
    {
        id: 2,
        image: dinnerspinner,
        title: "Dinner Spinner Project",
        link: "http://elycano.github.io/The_Dinner_Spinner/homepage.html",
        gitlink: "https://github.com/ThomBurt/The-Dinner-Spinner",
    },
    {
        id: 3,
        image: plantpal,
        title: "Plant Pal Project",
        link: "http://https://plant-pal-project.herokuapp.com/",
        gitlink: "https://github.com/comkirk30/plant_pal",
    },
    {
        id: 4,
        image: weather,
        title: "Weather Dashboard Project",
        link: "http://jamoore4579.github.io/Weather_Dashboard_Moore/",
        gitlink: "https://github.com/jamoore4579/Weather_Dashboard_Moore",
    },
    {
        id: 5,
        image: notetaker,
        title: "Note Taker Project",
        link: "https://note-taker-jam.herokuapp.com/",
        gitlink: "https://github.com/jamoore4579/Moore_Note_Taker",
    },
    {
        id: 6,
        image: workschedule,
        title: "Work Schedule Project",
        link: "https://jamoore4579.github.io/Work_Day_Scheduler_Moore/",
        gitlink: "https://github.com/jamoore4579/Work_Day_Scheduler_Moore",
    },
]

export const Projects = () => {

    return (
    <div>
        <ProjectWrapper>
            <ProjectContainer>
                {data.map((item) => (
                    <ProjectItem key={item.id}>
                        <ProjectItemImageContainer>
                            <ProjectItemImage src={item.image} alt={item.title}/>
                        </ProjectItemImageContainer>

                        <ProjectTitle>{item.title}</ProjectTitle>

                        <ProjectItemCta>
                            <ProjectItemLink href={item.link} target="_blank">
                                Deployed Link
                            </ProjectItemLink>
                            <ProjectItemLinkTwo
                                href="http://github.com" target="_blank"
                            >
                                Github Link
                            </ProjectItemLinkTwo>
                        </ProjectItemCta>
                    </ProjectItem>
                ))}
            </ProjectContainer>
        </ProjectWrapper>
    </div>
    )
};