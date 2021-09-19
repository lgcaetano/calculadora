import React from "react";
import { Component } from "react";
import Board from "./board";

function roundDecimalPlaces(number, numberOfPlaces){
    return Math.round(number * (10 ** numberOfPlaces)) / (10 ** numberOfPlaces) 
}

function findFirstNonZero(string){
    let i;
    for(i = 0; i < string.length; i++){
        if(string != '0')
            return i
    }
}

function tryEval(expression){
    try{
        return eval(expression)
    } catch(e){
        alert('PLEASE ENTER VALID EXPRESSION')
        return '0'
    }
}

export default class Calculator extends Component{

    constructor(){
        super()
        this.state = {
            total: '0',
            numbers: ['0','1','2','3','4','5','6','7','8','9']
        }
    }

    clearScreen(){
        this.setState({total: '0'})
    }

    invertSignalScreen(){

        if(this.state.total[0] == '0')
            return

        if(this.state.total[0] != '-')
            this.setState({total: '-' + this.state.total})
        else
            this.setState({total: this.state.total.substr(1, this.state.total.length - 1)})
    }

    getResult(){
        this.setState({total: roundDecimalPlaces(tryEval(this.state.total.replace('%','/100')), 5)})
    }

    writeInScreen(value){
        // console.log(this.state.total.substr(1, this.state.total.length - 1))

        if(this.state.total[0] == '0' && this.state.numbers.includes(value) && this.state.total.length <= 1)
            this.setState({total: this.state.total.substr(1, this.state.total.length - 1) + value})
        else 
            this.setState({total: this.state.total + value})
    }

    handleClick(value){
        if(value == 'C')
            this.clearScreen()
        else if(value == '+-')
            this.invertSignalScreen()
        else if(value == '=')
            this.getResult()
        else
            this.writeInScreen(value)
    }


    render(){
        return (
            <div className="calculator-container">
                <div id="calc-screen">{this.state.total}</div>
                <Board clickHandling={value => this.handleClick(value)}></Board>
            </div>
        )
    }
} 