import React from 'react';

function About() {
    return (
        <section>
            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>
            <div className="center">
                <img src={require('../../src/assets/img/self.jpg')}
                alt="self-photo" 
                className="photo"/>
            </div>
            <div>
                <p>
                Operations Professional with excellent communication skills and the ability to work cross-functionally between multiple departments. Will bring a customer focused attitude to work every day and want to make a difference in the success of a company. With over 20 years of operations and business experience, have developed a strong ability to lead and motivate others to be successful and work as a team.
                </p>
            </div>
        </section>
    );
}

export default About;