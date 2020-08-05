import React, {Component} from 'react';

import "../CSS/CV.css";

class WorkExperience extends Component {
    render() {
        return (
            <div>
                {this.props.works.map((work, index) => {
                    return (
                        <div className={"work-experience"} id={index}>
                            <h3>{work.title}</h3>
                            <p className={"company"}><strong>{work.company}</strong></p>
                            <p>{work.date}</p>
                            <p>{work.description}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default WorkExperience