import React, {Component} from 'react';

import "../CSS/ProjectImage.css";

import Route1 from "../Images/Route1.jpg";
import Tamago from "../Images/Tamago.jpg";
import MoneyManager from "../Images/MoneyManager.jpg";
import PersonalDashboard from "../Images/PersonalDashboard.png";

class ProjectImage extends Component {
    render() {
        return (
            <div>
                <div className={"row"}>
                    <img className={"project-image"} src={Route1} alt={"This image isn't available right now"}/>
                    <img className={"project-image"} src={Tamago} alt={"This image isn't available right now"}/>
                    <img className={"project-image"} src={MoneyManager} alt={"This image isn't available right now"}/>
                </div>
                <div className={"row"}>
                    <img className={"project-image"} src={PersonalDashboard} alt={"This image isn't available right now"}/>
                </div>
            </div>
        )
    }
}

export default ProjectImage;
