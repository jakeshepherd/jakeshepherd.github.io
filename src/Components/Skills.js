import React, {Component} from 'react';

import "../CSS/Skills.css";

class Skills extends Component {
    render() {
        return (
            <div>
                {this.props.skills.map((skill, index) => {
                    return (
                        <div id={"skill-box"} key={index}>
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
