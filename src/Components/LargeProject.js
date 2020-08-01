import React, {Component} from "react";

class LargeProject extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.details}</p>
                <img src={this.props.image} alt={"Sorry, this could not be found."}/>
            </div>
        );
    }
}

export default LargeProject