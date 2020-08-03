import React, {Component} from 'react';

import "../CSS/ProjectImage.css";

import Route1 from "../Images/Route1.jpg";
import Tamago from "../Images/Tamago.jpg";
import PersonalDashboard from "../Images/PersonalDashboard.png";

class ProjectImage extends Component {
    render() {
        return (
            <div>
                <h2>Recent work</h2>
                <div className={"row"}>
                    <a href={"projects"}>
                        <div className={"container"}>
                            <img className={"project-image"} src={Route1} alt={"This image isn't available right now"}/>
                            <div className="overlay">
                                <p className="image-header"><strong>Route 1</strong></p>
                                <p className="image-text">This is some test text</p>
                            </div>
                        </div>
                    </a>

                    <a href={"projects"}>
                        <div className={"container"}>
                            <img className={"project-image"} src={Tamago} alt={"This image isn't available right now"}/>
                            <div className="overlay">
                                <p className="image-header"><strong>Tamago</strong></p>
                                <p className="image-text">This is some test text</p>
                            </div>
                        </div>
                    </a>

                    <a href={"projects"}>
                        <div className={"container"}>
                            <img className={"project-image"} src={PersonalDashboard}
                                 alt={"This image isn't available right now"}/>
                            <div className="overlay">
                                <p className="image-header"><strong>Personal Dashboard</strong></p>
                                <p className="image-text">This is some test text</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default ProjectImage;
