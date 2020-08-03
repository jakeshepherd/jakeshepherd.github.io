import React, {Component} from "react";

import "../CSS/Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className={"footer"}>
                <a href={"/"}>
                    <p><strong>About me</strong></p>
                </a>
                <a href={"/contact"}>
                    <p><strong>Contact me</strong></p>
                </a>
                <a href={"/projects"}>
                    <p><strong>Projects</strong></p>
                </a>
            </footer>
        )
    }
}

export default Footer;
