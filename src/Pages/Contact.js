import React, {Component} from 'react';

import "../CSS/ContactForm.css";

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Contact me</h2>
                <form className={"contact-form"}>
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