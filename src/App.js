import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import logo from './logo.svg';
import './App.css';
import reducer from './reducer.js';
import JsonDropZone from './JsonDropZone.js';
import { loadAnimation } from 'bodymovin';

let store = createStore(reducer);

class App extends Component {
  constructor(){
    super();
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(animData) {
    loadAnimation({
      container: document.getElementById("test") , // the dom element
      renderer: 'canvas',
      loop: true,
      autoplay: true,
      animationData: animData // the animation data
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>AE2WEB</h2>
          </div>
          <JsonDropZone onDrop={this.onDrop}/>
        </div>
      </Provider>
    );
  }
}

export default App;
