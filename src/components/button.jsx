import React from "react";
import { Component } from "react";

export default class Button extends Component{

    constructor(props){
        super(props)
        this.state = {
            class: this.getClass(this.props.buttonValue)
        }
    }

    getClass(value){
        console.log('HEY')
        const commonButtons = ['C','%','1','2','3','4','5','6','7','8','9','+-','.']
        if(commonButtons.includes(value))
            return 'common-button'
        else if(value == '0')
            return 'zero-button'
        else    
            return 'side-button'
    }

    render(){
        return <button className={this.state.class} onClick={() => this.props.clickFunction(this.props.buttonValue)}>
            {this.props.buttonValue}
        </button>
    }
}