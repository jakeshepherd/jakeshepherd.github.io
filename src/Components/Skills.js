import React, {Component} from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                {this.props.skills.map((skill) => {
                    return <li>{skill}</li>
                })}
            </div>
        );
    }

}

export default Skills;