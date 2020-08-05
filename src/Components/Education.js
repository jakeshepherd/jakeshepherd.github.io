import React, {Component} from 'react';

import "../CSS/CV.css";

class Education extends Component {
    render() {
        return (
            <div>
                {this.props.educations.map((education, index) => {
                    return (
                        <div className={"work-experience"} id={index}>
                            <h3>{education.level}</h3>
                            <p className={"establishment"}><strong>{education.establishment}</strong></p>
                            <p>{education.date}</p>
                            <p>{education.grades}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Education