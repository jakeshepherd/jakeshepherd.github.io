import React, {Component} from 'react';

import "../CSS/CV.css";

class Education extends Component {
    render() {
        return (
            <div>
                <h1 className={"CV-header"}>Education</h1>
                {this.props.educations.map((education, index) => {
                    return (
                        <div className={"work-experience"} key={index}>
                            <h3>{education.level}</h3>
                            <p className={"establishment"}><strong>{education.establishment}</strong></p>
                            <p className={"date"}>{education.date}</p>
                            <p className={"description"}>{education.grades}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Education