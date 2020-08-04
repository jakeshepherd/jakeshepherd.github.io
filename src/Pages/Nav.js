import React, {Component} from "react";
import {
    NavLink,
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import "../CSS/Nav.css";
import 'bootstrap/dist/css/bootstrap.css';
import Burger from "../Components/Burger";

class Nav extends Component {
    render() {
        return (
                <div className="App">
                    <Navbar className={"NavBar"} bg="dark" expand="lg">
                        <NavLink className={"brand"} to="/">Jake Shepherd</NavLink>
                        <Burger/>
                    </Navbar>
                </div>
        );
    }
}

export default Nav;
