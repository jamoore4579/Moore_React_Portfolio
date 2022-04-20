import React from "react";
import Project from "../Project";

function Portfolio() {
    const projects = [
        {
            name: 'Run Buddy',
            description: 'Runner Web site',
            image: 'run-buddy.jpg',
            technologies: [
                'HTML/CSS'
            ],
            github: 'https://github.com/jamoore4579/Run-Buddy-Repo',
            deployed: 'https://jamoore4579.github.io/Run-Buddy-Repo/'
        },
        {
            name: 'The Dinner Spinner',
            description: 'The Dinner Spinner site',
            image: 'dinner_spinner.JPG',
            technologies: [
                'HTML/CSS',
                'JavaScript',
            ],
            github: 'https://github.com/jamoore4579/Run-Buddy-Repo',
            deployed: 'https://jamoore4579.github.io/Run-Buddy-Repo/'
        },
        {
            name: 'Weather Dashboard',
            description: 'Weather Dashboard site',
            image: 'weather.jpg',
            technologies: [
                'HTML/CSS',
                'JavaScript',
            ],
            github: 'https://github.com/jamoore4579/Weather_Dashboard_Moore',
            deployed: 'https://jamoore4579.github.io/Weather_Dashboard_Moore/'
        },
        {
            name: 'Plant Pal',
            description: 'Plant Pal site',
            image: 'plant_pal.JPG',
            technologies: [
                'HTML/CSS',
                'JavaScript',
                'Node.js',
                'Express.js',
                'MySQL',
                'Handlebars.js',
            ],
            github: 'https://github.com/jamoore4579/plant_pal',
            deployed: 'https://plant-pal-project.herokuapp.com/'
        },
    ];

    return (
        <section>
            <div className='center'>
                <h1 className='page-header'>My Portfolio</h1>
            </div>
            <div>
                <ul className='flex-row mobile-row'>
                    <li className='padding'>
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className='padding'>
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
                <ul className='flex-row mobile-row'>
                    <li className='padding'>
                        <Project projects={projects[2]}></Project>
                    </li>
                    <li className='padding'>
                        <Project projects={projects[3]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    )
}



export default Portfolio;