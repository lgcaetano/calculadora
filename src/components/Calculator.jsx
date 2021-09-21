import React from "react";
import { Component } from "react";
import Board from "./board";
import Draggable from "react-draggable";

function roundDecimalPlaces(number, numberOfPlaces){
    return Math.round(number * (10 ** numberOfPlaces)) / (10 ** numberOfPlaces) 
}

function lastNumberAlreadyHasPoint(expression){
    const operations = ['/','*','-','+']

    for(let i = expression.length - 1; i >= 0; i--){
        if(expression[i] == '.')
            return true
        if(operations.includes(expression[i]))
            return false
    }
    return false
}

function tryEval(expression){
    try{
        return eval(expression)
    } catch(e){
        // alert('PLEASE ENTER VALID EXPRESSION')
        return tryEval(expression.substr(0, expression.length - 1))
    }
}

export default class Calculator extends Component{

    constructor(){
        super()
        this.state = {
            total: '0',
            numbers: ['0','1','2','3','4','5','6','7','8','9'],
            operations:['/','*','-','+']
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
        // console.log(this.props.children)
        this.setState({total: String(roundDecimalPlaces(tryEval(this.state.total.replace(/%/g,'*(1/100)')), 5))}, () => {
            console.log(this.state.total)
        })
    }

    writeInScreen(value){
        if(value == '.' && lastNumberAlreadyHasPoint(this.state.total))
            return    
        this.setState({total: this.state.total + value}, () => this.checkValue())
    }

    checkValue(){
        let totalAtual = this.state.total

        if(totalAtual[0] == '0' && this.state.numbers.includes(totalAtual[1]))
            this.setState({total: totalAtual.substr(1, totalAtual.length - 1)})
        
        totalAtual = this.state.total
        
        let penultimoElemento = totalAtual[totalAtual.length - 2]
        let ultimoElemento = totalAtual[totalAtual.length - 1]
        
        if(this.state.operations.includes(penultimoElemento) && this.state.operations.includes(ultimoElemento))
            this.setState({total: totalAtual.substr(0, totalAtual.length - 1)})
    }

    handleClick(value){
        if(value === 'C')
            this.clearScreen()
        else if(value === '+-')
            this.invertSignalScreen()
        else if(value === '=')
            this.getResult()
        else
            this.writeInScreen(value)
    }


    render(){
        return (
            <Draggable>
                <div id="root">
                    <div id="lights-container">
                        <div className="light red"></div>
                        <div className="light yellow"></div>
                        <div className="light green"></div>
                    </div>
                    <div className="calculator-container">
                        <div id="calc-screen">{this.state.total}</div>
                        <Board clickHandling={value => this.handleClick(value)}></Board>
                    </div>
                </div>
            </Draggable>
        )
    }
} 