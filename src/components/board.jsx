import React from "react";
import { Component } from "react";
import Button from "./button";

export default class Board extends Component{

    
    render(){
        return <div id="game-board">
            <Button buttonValue='C' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='+-' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='%' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='/' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='7' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='8' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='9' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='*' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='4' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='5' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='6' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='-' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='1' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='2' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='3' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='+' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='0' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='.' clickFunction = {value => this.props.clickHandling(value)}></Button>
            <Button buttonValue='=' clickFunction = {value => this.props.clickHandling(value)}></Button>
        </div>
    }
}