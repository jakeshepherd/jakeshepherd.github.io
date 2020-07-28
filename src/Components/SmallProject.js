import React, {Component} from "react";

class SmallProject extends Component {
    render() {
        return (
            <div>
                <p><strong>{this.props.name}</strong> - {this.props.details}</p>
            </div>
        );
    }
}

export default SmallProject