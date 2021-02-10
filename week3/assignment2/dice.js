import React from 'react';
import ReactDOM from 'react-dom';
import DiceFace from './extradice.js';
import '../css/Dice.css';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: 0,
      dice2: 0,
      rolledOnce: false
    };
  }

  handleRoll = () => {
    this.setState({
      dice1: Math.floor((Math.random() * 6) + 1),
      dice2: Math.floor((Math.random() * 6) + 1),
      rolledOnce: true
    });
  }

  render() {
    if(!this.state.rolledOnce) {
      return (
        <div className="dice">
          <button class = "diceButton" onClick={this.handleRoll}> ROLL THE DICE</button>
        </div>
      )
    }
    else {
      return (
        <div className="dice">
          YOUR ROLL IS {parseInt(this.state.dice1) + parseInt(this.state.dice2)}
          <br/>
          <div class = "diceFace">
            <DiceFace roll = {this.state.dice1}/>
            <DiceFace roll = {this.state.dice2}/>
          </div>
          <button class = "diceButton" onClick={this.handleRoll}> ROLL THE DICE</button>
        </div>
      )
    }
  }

}

export default Dice;