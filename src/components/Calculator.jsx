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
        // alert('PLEASE ENTER VALID EXPRESSION')
        return expression.substr(0, expression.length - 1)
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
        console.log(this.state.total, typeof this.state.total)
        this.setState({total: String(roundDecimalPlaces(tryEval(this.state.total.replace(/%/g,'*(1/100)')), 5))})
    }

    writeInScreen(value){
        // console.log(this.state.total.substr(1, this.state.total.length - 1))

        // if(this.state.total[0] == '0' && this.state.numbers.includes(value) && this.state.total.length <= 1)
        //     this.setState({total: this.state.total.substr(1, this.state.total.length - 1) + value})
        // else 
        this.setState({total: this.state.total + value}, () => this.checkValue())
    }

    checkValue(){
        // console.log(this.state.total)
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