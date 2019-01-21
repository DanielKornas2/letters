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

  render() {
    return (
      <React.Fragment>
        <input type="text" value={this.state.text} onChange={this.handleInputChange} />
        <ValidationComponent textLength = {this.state.text.length} />
        <CharComponent />
      </React.Fragment>
    );
  }
}

export default App;
