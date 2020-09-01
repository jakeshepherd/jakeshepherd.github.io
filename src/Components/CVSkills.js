import React from 'react';

import '../CSS/cv-skills.css';

class CVSkills extends React.Component {
    render() {
        return (
            <div className={"skills-div"}>
                <h1 className={"skills-header"}>Skills</h1>
                <div className={"left-soft"}>
                    {this.props.soft.map((skill, index) => {
                        return <li key={index}>{skill}</li>
                    })}
                </div>
                <div className={"right-hard"}>
                    {this.props.hard.map((skill, index) => {
                        return <li key={index}>{skill}</li>
                    })}
                </div>
            </div>
        );
    }
}

export default CVSkills