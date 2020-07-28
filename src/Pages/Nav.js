import React, {Component} from "react";
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Projects from "./Projects";
import Home from "./Home";


class Nav extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar className={"NavBar"}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/contact">Contact me</NavLink>
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