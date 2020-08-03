import React, {Component} from "react";

class LargeProject extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.details}</p>
                <img className={"large-image"} src={this.props.image} alt={"Sorry, this could not be found."}/>
            </div>
        );
    }
}

export default LargeProject