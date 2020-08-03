import React, {Component} from 'react';

import "../CSS/Skills.css";

class Skills extends Component {
    render() {
        return (
            <div>
                {this.props.skills.map((skill, index) => {
                    return (
                        <div id={"skill-box"} key={index}>
                            <img id={"skill-icon"} src={skill.image} alt={"it no workey lols"}/>
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </div>
                    )
                })}
            </div>
        );
    }

}

export default Skills;
