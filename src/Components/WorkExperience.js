import React, {Component} from 'react';

import "../CSS/CV.css";

class WorkExperience extends Component {
    render() {
        return (
            <div>
                <h1 className={"CV-header"}>Work Experience</h1>
                {this.props.works.map((work, index) => {
                    return (
                        <div className={"work-experience"} key={index}>
                            <h3>{work.title}</h3>
                            <p className={"company"}><strong>{work.company}</strong></p>
                            <p className={"date"}>{work.date}</p>
                            <p className={"description"}>{work.description}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default WorkExperience