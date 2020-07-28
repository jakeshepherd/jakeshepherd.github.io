import React, {Component} from 'react';
import Skills from "../Components/Skills";

import '../CSS/Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hi there, I'm Jake</h1>
                <p>I'm a Student & Software Developer studying at the University of Bath for my Bsc in Computer Science.</p>
                <span className="spacer" />
                <h1>Skills</h1>
                <Skills skills={["hello", "there"]}/>
            </div>
        );
    }
}

export default Home;