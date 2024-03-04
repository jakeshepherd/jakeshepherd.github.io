import React, {Component} from 'react';
import ContactInfo from '../Components/ContactInfo';

import "../CSS/ContactForm.css";

class Contact extends Component {
    render() {
        return (
            <div className={"center-page"}>
                <h2>Contact me</h2>
                <ContactInfo />
            </div>
        )
    }
}

export default Contact;
