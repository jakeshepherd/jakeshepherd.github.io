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
                        <img className={"project-image"} src={Route1} alt={"This image isn't available right now"}/>
                    </a>
                    <a href={"projects"}>
                        <img className={"project-image"} src={Tamago} alt={"This image isn't available right now"}/>
                    </a>
                    <a href={"projects"}>
                        <img className={"project-image"} src={PersonalDashboard}
                             alt={"This image isn't available right now"}/>
                    </a>
                </div>
            </div>
        )
    }
}

export default ProjectImage;
