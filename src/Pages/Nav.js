import React, {Component} from "react";
import {
    NavLink,
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import "../CSS/Nav.css";
import 'bootstrap/dist/css/bootstrap.css';

class Nav extends Component {
    render() {
        return (
            <div className="App">
                <Navbar className={"NavBar"} bg="dark" expand={"sm"}>
                    <NavLink className={"brand"} to="/">Jake Shepherd</NavLink>
                    <NavLink className={"nav-link"} to={"/"}>Home</NavLink>
                    <NavLink className={"nav-link"} to={"/projects"}>Projects</NavLink>
                    <NavLink className={"nav-link"} to={"/cv"}>CV</NavLink>
                    <NavLink className={"nav-link"} to={"/contact"}>Contact</NavLink>
                </Navbar>
            </div>
        );
    }
}

export default Nav;
