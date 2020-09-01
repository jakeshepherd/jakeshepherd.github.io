import React, {Component} from 'react';

import "../CSS/Skills.css";

class Skills extends Component {
    render() {
        return (
            <div>
                {this.props.skills.map((skill, index) => {
                    return (
                        <div className={"skill-box"} key={index}>
                            <img id={"skill-icon"} src={skill.image} alt={"Unable to load photo."}/>
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
