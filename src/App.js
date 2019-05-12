import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dice from './Dice';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dice:[]
    }
  }
  addDice() {
    var newDice = this.state.dice.slice(0);
    newDice.push({value:1, sides:6});

    this.setState({
      dice: newDice,
    })
  }
  rollDice = () => {
    var newDice = this.state.dice.map(die => ({
        value: Math.floor(Math.random() * die.sides)+1,
        sides: die.sides
    }));
    this.setState({
      dice: newDice,
    })
  }

  render(){
    return (
    <div className="container">
      <button onClick={() => this.addDice()}>Add Dice</button>
      <div id="result">
        {this.state.dice.map((die, i)  => <Dice key={i} value={die.value} /> )}
      </div>
      <button onClick={ () => this.rollDice()}>Roll Dice</button>
    </div>
    );
  }
}
export default App;
