import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Material_Inward from './Components/Material_Inward';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <br/>
        <div className="Material_Inward">
          <div>
            <Material_Inward />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
