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
    }
]

const Projects = () => {
    return (
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
    )
}

 export default Projects;
//         {
//             name: 'Run Buddy',
//             description: 'Runner Web site',
//             image: 'run-buddy.jpg',
//             technologies: [
//                 'HTML/CSS'
//             ],
//             github: 'https://github.com/jamoore4579/Run-Buddy-Repo',
//             deployed: 'https://jamoore4579.github.io/Run-Buddy-Repo/'
//         },
//         {
//             name: 'The Dinner Spinner',
//             description: 'The Dinner Spinner site',
//             image: 'dinner_spinner.JPG',
//             technologies: [
//                 'HTML/CSS',
//                 'JavaScript',
//             ],
//             github: 'https://github.com/jamoore4579/Run-Buddy-Repo',
//             deployed: 'https://jamoore4579.github.io/Run-Buddy-Repo/'
//         },
//         {
//             name: 'Weather Dashboard',
//             description: 'Weather Dashboard site',
//             image: 'weather.jpg',
//             technologies: [
//                 'HTML/CSS',
//                 'JavaScript',
//             ],
//             github: 'https://github.com/jamoore4579/Weather_Dashboard_Moore',
//             deployed: 'https://jamoore4579.github.io/Weather_Dashboard_Moore/'
//         },
//         {
//             name: 'Plant Pal',
//             description: 'Plant Pal site',
//             image: 'plant_pal.JPG',
//             technologies: [
//                 'HTML/CSS',
//                 'JavaScript',
//                 'Node.js',
//                 'Express.js',
//                 'MySQL',
//                 'Handlebars.js',
//             ],
//             github: 'https://github.com/jamoore4579/plant_pal',
//             deployed: 'https://plant-pal-project.herokuapp.com/'
//         },
//     ];