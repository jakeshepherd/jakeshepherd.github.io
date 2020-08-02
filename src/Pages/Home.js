import React, {Component} from 'react';
import Skills from "../Components/Skills";

import '../CSS/Home.css';

import JakeBarry from "../Images/Jake&Barry.jpg";

class Home extends Component {
    render() {
        return (
            <div>
                <div className={"portrait"}>
                    <img className={"me"} src={JakeBarry} alt={"Sorry, this could not be found."}/>
                </div>
                <h1>Hi there, I'm Jake</h1>
                <p>I work as a front end and back end developer. I have passion for tidy, well architected and Test
                    Driven software.</p>
                <button>Contact me</button>
                <span className="spacer"/>
                <h1>Skills</h1>
                <Skills skills={["Code", "Ing"]}/>
            </div>
        );
    }
}

export default Home;
