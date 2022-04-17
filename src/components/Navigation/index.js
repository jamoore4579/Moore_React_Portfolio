import React from "react";

function Navigation(props) {
    const { navigatePage, setNavigatePage } = props;

    return (
        <nav>
            <ul classname="flex-row mobile-view">
                <li classname={navigatePage === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setNavigatePage("about")}>About Me</span>
                </li>
                <li classname={navigatePage === "portfolio" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setNavigatePage("portfolio")}>Portfolio</span>
                </li>
                <li classname={navigatePage === "contact" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setNavigatePage("contact")}>Contact</span>
                </li>
                <li classname={navigatePage === "resume" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setNavigatePage("resume")}>Resume</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;