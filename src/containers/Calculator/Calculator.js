import React, {Component} from "react";
import {connect} from "react-redux";
import Display from '../../components/Display/Display'
import Buttons from '../../components/Button/Button'

class Calculator extends Component {

    render() {
        const {value, buttons, add, clear, equal} = this.props;

        return (
            <div className="m-5">
                <Display value={value}/>
                <div className="row">
                    <div className="col-sm-2">
                        {buttons.map((item, key) => {
                            if (item === "C") {
                                return (
                                    <Buttons click={this.props.clear.bind(this)} item={item} key={key}/>
                                )
                            } else if (item === "=") {
                                return (
                                    <Buttons click={this.props.equal.bind(this, value)} item={item} key={key}/>
                                )
                            } else {
                                return (
                                    <Buttons click={this.props.add.bind(this, item)} item={item} key={key}/>
                            )
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value,
        buttons: state.buttons
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (text) => {
            dispatch({type: 'ADD', text})
        },
        clear: () => {
            dispatch({type: 'CLEAR'})
        },
        equal: (value) => {
            dispatch({type: 'EQUAL', value})
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);