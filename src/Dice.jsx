import React, {Component} from "react";

export default class Dice extends Component{


    render(){
        return (
            <div className="container">
                <div>{this.props.value}</div>
            </div>
        );
    }
}