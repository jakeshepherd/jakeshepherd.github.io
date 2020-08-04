import React, {Component} from "react";

import "../CSS/Footer.css";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className={"footer"}>
                <Link to={"/"}>
                    <p><strong>About me</strong></p>
                </Link>
                <Link to={"/contact"}>
                    <p><strong>Contact me</strong></p>
                </Link>
                <Link to={"/projects"}>
                    <p><strong>Projects</strong></p>
                </Link>
            </footer>
        )
    }
}

export default Footer;
