import React from 'react';
import ReactDOM from 'react-dom';
import DiceFace from './extradice.js';

class MultipleDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfRolls: 0,
      rollCount: []
    };

  }

  handleChangeText = (e) => {
    e.target.select();
  }

  handleNumOfRolls = (e) => {
    this.setState({
      numOfRolls: e.target.value
    });
  }

  handleSubmit = (e) => {
    this.setState({
      rollCount: []
    });
    for(let i = 0; i < this.state.numOfRolls; i++) {
      alert(i);
    }
  }

  render() {
    return (
      <div className="multiple-dice">
        <input type="text"  size="3" value={this.state.numOfRolls} onChange={this.handleNumOfRolls} onClick={this.handleChangeText}/>
        {this.state.numOfRolls}
        <button onClick={this.handleSubmit}> ROLL THE DICE</button>
      </div>
    )
  }

}

export default MultipleDice;