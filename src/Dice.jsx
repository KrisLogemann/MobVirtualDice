import React, {Component} from "react";

export default class Dice extends Component{


    render(){
        var color;
        switch (this.props.sides){
            case '4':
                color = "text-primary";
                break;

            case '6':
                color = "text-secondary";
                break;

            case '8':
                color = "text-success";
                break;

            case '10':
                color = "text-danger";
                break;

            case '12':
                color = "text-warning";
                break;

            case '20':
                color = "text-info";
                break;
        }
        return (
            <div className='col well '>
                <div className={color}>{this.props.value} / {this.props.sides}</div>
            </div>
        );
    }
}