import React, {Component} from 'react';
import Contact from "../Pages/Contact.js";

class ContactButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false
        }
    }

    onContactClick = () => {
        this.setState({
            showComponent: !this.state.showComponent,
        });
    }

    render() {
        return (
            <React.Fragment>
                <button className={"contact-me"} onClick={this.onContactClick}><strong>Contact me</strong></button>
                {this.state.showComponent ?
                    <Contact /> :
                    null
                }
            </React.Fragment>
        );
    }
}

export default ContactButton;