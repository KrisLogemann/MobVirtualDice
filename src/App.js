import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dice from './Dice';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dice:[],
      sides: 6,
      total: 0,
    }
  }
  addDice() {
    var newDice = this.state.dice.slice(0);
    newDice.push({value:1, sides:this.state.sides});

    this.setState({
      dice: newDice,
    })
  }

  updateSides(e){
    this.setState({
      sides: e.target.value,
    })
  }

  rollDice = () => {
    var newDice = this.state.dice.map(die => ({
        value: Math.floor(Math.random() * die.sides)+1,
        sides: die.sides
    }));
    this.setState({
      dice: newDice,
      total: newDice.reduce((sum, die) => sum+die.value,0)
    });
  }

  render(){
    return (
    <div className="container">
      <div className="jumbotron text-center">Virtual Dice</div>
      <div className="row-auto">
        <button onClick={() => this.addDice()}>Add Dice</button>
        <select onChange={(e) => this.updateSides(e)}>
          <option value='4'>4</option>
          <option selected value='6'>6</option>
          <option value='8'>8</option>
          <option value='10'>10</option>
          <option value='12'>12</option>
          <option value='20'>20</option>
        </select>
        <button onClick={ () => this.rollDice()}>Roll Dice</button>
      </div>
        <div className="row" id="result">
          {this.state.dice.map((die, i)  => <Dice key={i} value={die.value} sides={die.sides} /> )}
        </div>
        <div>Total of your roll is: {this.state.total}</div>
    </div>
    );
  }
}
export default App;
