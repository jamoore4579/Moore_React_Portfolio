import React from "react";
import "./style.css"

function Footer() {
    return (
        <footer class="page-footer fixed-bottom font-small special-color-dark pt-4">
            <div class="container">
                <ul class="list-unstyled list-inline text-center">
                    <li class="list-inline-item">
                        <a
                            href="https://github.com/jamoore4579"
                            target="_blank"
                            rel="noopener noferrer"
                        >
                            <img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/jason-moore-163a5767/"
                            target="_blank"
                            rel="noopener noferrer"
                        >
                            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/irish_moore5?t=iFZlCc5hc0_7hsdJbgKnHw&s=09"
                            target="_blank"
                            rel="noopener noferrer"
                        >
                            <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" className="icon"/>
                        </a>
                    </li>
                </ul>
            </div>
            
        </footer>
    );
}

export default Footer;