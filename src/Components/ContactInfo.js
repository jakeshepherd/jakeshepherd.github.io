import React, {Component} from 'react';

import Email from "../Images/icons8-email-64.png";
import LinkedIn from "../Images/icons8-linkedin-64.png";

import "../CSS/CV.css";

class ContactInfo extends Component {
    render() {
        return (
            <div className={"contact-info-box"}>
                <h3 className={"contact-info-header"}>Contact Info</h3>
                <div className={"contact-info-row"}>
                    <img className={"contact-info-icons"} src={Email} alt={"Sorry, this could not be loaded."}/>
                    <p className={"contact-info"}>jakeshepherd98@gmail.com</p>
                </div>
                <div className={"contact-info-row"}>
                    <img className={"contact-info-icons-linkedin"} src={LinkedIn} alt={"Sorry, this could not be loaded."}/>
                    <a href={"https://www.linkedin.com/in/jacob-shepherd-713719159/"}
                       className={"contact-info-linkedin"}>linkedin.com/in/jacob-shepherd</a>
                </div>
            </div>
        );
    }
}

export default ContactInfo
