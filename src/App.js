import React, { Component } from 'react';
import './App.css';

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
      </React.Fragment>
    );
  }
}

export default App;
