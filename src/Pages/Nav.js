import React, {Component} from "react";
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Projects from "./Projects";
import Home from "./Home";

import "../CSS/Nav.css";
import 'bootstrap/dist/css/bootstrap.css';

class Nav extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar className={"NavBar"} bg="dark" expand="lg">
                        <NavLink id={"brand"} to="/">Jake Shepherd</NavLink>
                        <Navbar.Collapse>
                            <NavLink className={"nav-link"} to="/">Home</NavLink>
                            <NavLink className={"nav-link"} to="/projects">Projects</NavLink>
                            <NavLink className={"nav-link"} to="/cv">CV</NavLink>
                            <NavLink className={"nav-link"} to="/contact">Contact</NavLink>
                            </Navbar.Collapse>
                        </Navbar>

                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Nav;
