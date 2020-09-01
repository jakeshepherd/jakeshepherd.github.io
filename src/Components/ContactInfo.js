import React, {Component} from 'react';

import Calender from "../Images/icons8-planner-64.png";
import Person from "../Images/icons8-person-64.png";
import Phone from "../Images/icons8-phone-64.png";
import Email from "../Images/icons8-email-64.png";
import LinkedIn from "../Images/icons8-linkedin-64.png";

import "../CSS/CV.css";

class ContactInfo extends Component {
    render() {
        return (
            <div className={"contact-info-box"}>
                <h3 className={"contact-info-header"}>Contact Info</h3>
                <div className={"contact-info-row"}>
                    <img className={"contact-info-icons"} src={Calender} alt={"Sorry, this could not be loaded."}/>
                    <p className={"contact-info"}>07/10/1998</p>
                </div>
                <div className={"contact-info-row"}>
                    <img className={"contact-info-icons"} src={Person} alt={"Sorry, this could not be loaded."}/>
                    <p className={"contact-info"}>Jacob Shepherd</p>
                </div>
                <div className={"contact-info-row"}>
                    <img className={"contact-info-icons"} src={Phone} alt={"Sorry, this could not be loaded."}/>
                    <p className={"contact-info"}>+44 7775595445</p>
                </div>
                <div className={"contact-info-row"}>
                    <img className={"contact-info-icons"} src={Email} alt={"Sorry, this could not be loaded."}/>
                    <p className={"contact-info"}>jakeshepherd98@gmail.com</p>
                </div>
                <div className={"contact-info-row"}>
                    <img className={"contact-info-icons-linkedin"} src={LinkedIn} alt={"Sorry, this could not be loaded."}/>
                    <a href={"https://www.linkedin.com/in/jacob-shepherd-713719159/"}
                       className={"contact-info"}>linkedin.com/in/jacob-shepherd</a>
                </div>
            </div>
        );
    }
}

export default ContactInfo