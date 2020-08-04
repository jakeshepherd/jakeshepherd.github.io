import React, {Component} from 'react';

import "../CSS/ProjectImage.css";

import Route1 from "../Images/Route1.jpg";
import Tamago from "../Images/Tamago.jpg";
import PersonalDashboard from "../Images/PersonalDashboard.png";
import {Link} from "react-router-dom";

class ProjectImage extends Component {
    render() {
        return (
            <div>
                <h2>Recent work</h2>
                <div className={"row"}>
                    <Link to={"/projects"}>
                        <div className={"container"}>
                            <img src={Route1} alt={"This image isn't available right now"}/>
                            <div className="overlay">
                                <p className="image-header"><strong>Route 1</strong></p>
                                <p className="image-text">An android application that determines best routes based on previous journeys a user has gone on </p>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/projects"}>
                        <div className={"container"}>
                            <img src={Tamago} alt={"This image isn't available right now"}/>
                            <div className="overlay">
                                <p className="image-header"><strong>Tamago</strong></p>
                                <p className="image-text">An android application that will advice recipes based on the food you have left in your household.</p>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/projects"}>
                        <div className={"container"}>
                            <img src={PersonalDashboard}
                                 alt={"This image isn't available right now"}/>
                            <div className="overlay">
                                <p className="image-header"><strong>Personal Dashboard</strong></p>
                                <p className="image-text">A website created in Laravel to act as a users first page they hit when they open up their internet browser.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ProjectImage;
