import React, {Component} from 'react';

import "../CSS/CV.css";

class WorkExperience extends Component {
    render() {
        return (
            <div>
                {this.props.works.map((work, index) => {
                    return (
                        <div className={"work-experience"} id={index}>
                            <h2>{work.title}</h2>
                            <p className={"company"}><strong>{work.company}</strong></p>
                            <h3>{work.date}</h3>
                            <p>{work.description}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default WorkExperience