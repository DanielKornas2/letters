import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'


class App extends Component {
  constructor(){
    super();
    this.state = {
      text : ""
    }
  }

  handleInputChange = (e) => {
    this.setState({
      text : e.target.value
    })
  }

  removeLetter = (index) => {
    const singleLetters = this.state.text.split(""); // split state text to single letters
    singleLetters.splice(index,1); // delete clicked item - i found this by clicked index
    const newText = singleLetters.join(""); // create new text - by joining single letters without clicked letter 
    this.setState({
      text: newText
    })
  }

  render() {
    const singleLetters = this.state.text.split("");
    return (
      <React.Fragment>
        <h1>Letters app</h1>
        <p>How does it work?</p>
        <p>Specify your text. You'll see single letters and if you click on single letter you simply delete it.</p>
        <input type="text" value={this.state.text} onChange={this.handleInputChange} />
        <ValidationComponent textLength = {this.state.text.length} />
        {singleLetters.map((letter, index) => <CharComponent letter={letter} key={index} removeLetter ={() => this.removeLetter(index)} />)}
      </React.Fragment>
    );
  }
}

export default App;
