import React, {Component} from 'react';
import Skills from "../Components/Skills";
import ProjectImage from "../Components/ProjectImage";

import '../CSS/Home.css';

import JakeBarry from "../Images/Jake&Barry.jpg";
import Communication from "../Images/icons8-communication-skill-64.png";
import Coding from "../Images/icons8-laptop-64.png";
import CleanCode from "../Images/icons8-code-64.png";
import ContactButton from "../Components/ContactButton";

class Home extends Component {
    render() {
        return (
            <div className={"center-page"}>
                <div className={"portrait"}>
                    <img className={"me"} src={JakeBarry} alt={"Sorry, this could not be found."}/>
                </div>
                <h1>Hi there, I'm Jake</h1>
                <p>I work as a front end and back end developer. I have a passion for tidy, well architected and Test
                    Driven software.</p>
                <ContactButton />
                <span className="spacer"/>
                <h1 className={"home-headings"}>Skills</h1>
                <Skills
                    skills={[
                        {name: "Test Driven Development", image: Communication, description: "Throughout my placement year I have been mentored by my peers and taken a training course in Test Driven Development. It is something I am passionate about and I believe it creates a more robust codebase."},
                        {name: "Full Stack Development", image: Coding, description: "I have dedicated time to further my skills in both back end and front end languages. I am competent in PHP frameworks like Laravel, Javascript frameworks like React and database languages like mySQL."},
                        {name: "Clean code", image: CleanCode, description: "I like my code...clean"},
                    ]}
                />
                <span className="spacer"/>
                <ProjectImage />
                <p className={"interested"}>Interested?
                </p>

                <ContactButton />

                <br />
                <br />
                <a target="_blank" href="https://icons8.com/icons/set/communication-skill">Communication Skill icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                <br />
                <a target="_blank" href="https://icons8.com/icons/set/laptop">Laptop icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                <br />
                <a target="_blank" href="https://icons8.com/icons/set/code">Code icon</a>icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </div>
        );
    }
}

export default Home;
