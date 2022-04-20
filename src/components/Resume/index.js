import React from "react";

function Resume() {
    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Resume</h1>
            </div>
            <div className="bottom-spacing">
                <a href={require("../../assets/img/Jason_Moore_20_22.pdf")} download>
                    <h4>Download My Resume</h4>
                </a>
            </div>
            <div>
                <h5>Front-End Proficiencies</h5>
                <ol>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                </ol>
            </div>
        </section>
    );
}

export default Resume;