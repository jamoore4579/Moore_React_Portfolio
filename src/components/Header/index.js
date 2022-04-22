import React from "react";
import Navigation from "../Navigation";

function Header(props) {
    const { navigatePage, setNavigatePage} = props;

    return (
        <header>
            <div>
                <h2>Jason Moore</h2>
            </div>
            <div>
                <Navigation
                    navigatePage={navigatePage}
                    setNavigatePage={setNavigatePage}
                ></Navigation>
            </div>
        </header>
    );
}

export default Header;