import React, {Component} from "react";

export default class Dice extends Component{


    render(){
        return (
            <div className='col well'>
                <div>{this.props.value} / {this.props.sides}</div>
            </div>
        );
    }
}