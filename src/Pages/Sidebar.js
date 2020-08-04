import React from "react";
import {slide as Menu} from "react-burger-menu";

import "../CSS/Burger.css";
import {Link} from "react-router-dom";

export default props => {
    return (
        <Menu {...props}>
            <Link className="menu-item" to="/">
                Home
            </Link>

            <Link className="menu-item" to="/projects">
                Projects
            </Link>

            <Link className="menu-item" to="/cv">
                CV
            </Link>

            <Link className="menu-item" to="/contact">
                Contact
            </Link>
        </Menu>
    );
};