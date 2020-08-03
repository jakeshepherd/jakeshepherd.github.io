import React, {Component} from 'react';

import "../CSS/ProjectImage.css";

class ProjectImage extends Component {
    render() {
        return (
            <div className={"row"}>
                {this.props.images.map((image, index) => {
                    return (
                        <div className={"column"}>
                            <img key={index} className={"project-image"} src={image} alt={"borkey"}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ProjectImage;
