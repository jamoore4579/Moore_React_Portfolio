import React from "react";
//import Icon from "react-native-icons/Ionicons";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a
                    href="https://github.com/jamoore4579"
                    target="_blank"
                    rel="noopener noferrer"
                >
                    <img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/>
                </a>
                
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/jason-moore-163a5767/"
                    target="_blank"
                    rel="noopener noferrer"
                >
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/>
                </a>
                
            </div>
            <div>
                <a
                    href="https://twitter.com/irish_moore5?t=iFZlCc5hc0_7hsdJbgKnHw&s=09"
                    target="_blank"
                    rel="noopener noferrer"
                >
                    <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" className="icon"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;