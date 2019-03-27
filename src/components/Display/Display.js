import React, {Component} from "react";

class Display extends Component {
    render() {
        return (<div className="w-100">
                    <input type="text" value={this.props.value}/>
                </div>
        )}
}

export default Display