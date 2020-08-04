import React, {Component} from 'react';

import "../CSS/ContactForm.css";

class Contact extends Component {
    render() {
        return (
            <div className={"center-page"}>
                <h2>Contact me</h2>
                <form className={"contact-form"} action={"mailto:jakeshepherd98@gmail.com"} method={"POST"}
                name={"EmailForm"} encType={"multipart/form-data"}>
                    <label>Your name:</label>
                    <input type={"text"} name={"name"} />
                    <label>Subject</label>
                    <input type={"text"} name={"subject"} />
                    <label>Email</label>
                    <input type={"text"} name={"email"} />
                    <label>Message</label>
                    <input type={"textarea"} name={"name"} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;