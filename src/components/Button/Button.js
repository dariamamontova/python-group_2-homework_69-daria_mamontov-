import React, {Component} from "react";

class Buttons extends Component {
    render() {
        return (<button className="m-2" onClick={this.props.click} key={this.props.key}>{this.props.item}</button>)
        }
}

export default Buttons