import React from "react";
const runbuddy = require('../assets/img/run-buddy.jpg')
const weather = require('../assets/img/weather.jpg')
import {
    MDBCardGroup,
    MDBIcon,
    MDBContainer,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
} from "mdbreact";

const Projects = () => {
    return (
        <MDBContainer className="mt-5">
            <MDBCardGroup deck className="mt-3">
                <MDBCard className="border border-dark">
                    <MDBCardImage 
                        style={{ width: "485px" }}
                        src={runbuddy}
                        alt="run-buddy"
                    />
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">Run Buddy</MDBCardTitle>
                        <MDBCardText>
                        Run Buddy site
                        </MDBCardText>
                        <MDBBtn
                            href="https://jamoore4579.github.io/Run-Buddy-Repo/"
                            color="primary"
                            size="md"
                        >
                            <MDBIcon icon="clone left" className="mr-1" />
                            View Project
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className="border border-dark">
                    <MDBCardImage 
                        style={{ width: "485px" }}
                        src={weather}
                        alt="weather site"
                    />
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
                        <MDBCardText>
                        The Weather Dashboard site
                        </MDBCardText>
                        <MDBBtn
                            href="https://jamoore4579.github.io/Weather_Dashboard_Moore/"
                            color="primary"
                            size="md"
                        >
                            <MDBIcon icon="clone left" className="mr-1" />
                            View Project
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className="border border-dark">
                    <MDBCardImage 
                        style={{ width: "485px" }}
                        src={runbuddy}
                        alt="run-buddy"
                    />
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">Run Buddy</MDBCardTitle>
                        <MDBCardText>
                        The Dinner Spinner site
                        </MDBCardText>
                        <MDBBtn
                            href="https://jamoore4579.github.io/Run-Buddy-Repo/"
                            color="primary"
                            size="md"
                        >
                            <MDBIcon icon="clone left" className="mr-1" />
                            View Project
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className="border border-dark">
                    <MDBCardImage 
                        style={{ width: "485px" }}
                        src={runbuddy}
                        alt="run-buddy"
                    />
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">Run Buddy</MDBCardTitle>
                        <MDBCardText>
                        The Dinner Spinner site
                        </MDBCardText>
                        <MDBBtn
                            href="https://jamoore4579.github.io/Run-Buddy-Repo/"
                            color="primary"
                            size="md"
                        >
                            <MDBIcon icon="clone left" className="mr-1" />
                            View Project
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </MDBContainer>
    )
}

// export default Projects;
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