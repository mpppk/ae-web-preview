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
    this.onClick = this.onClick.bind(this);
    this.state = {loaded: false};
  }

  getPreviewDOM() {
    return document.getElementById("test");
  }

  onClick() {
    this.getPreviewDOM().textContent = null;
    this.setState({loaded: false});
  }

  onDrop(animData) {
    loadAnimation({
      container: this.getPreviewDOM(), // the dom element
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animData // the animation data
    });

    this.setState({loaded: true});
  }

  render() {

    const jsonDropZone = <JsonDropZone style={{marginTop: 20}} onDrop={this.onDrop}/>;
    const resetButton = <button onClick={this.onClick}>Reset</button>;

    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>AE WEB PREVIEW</h2>
          </div>
          {this.state.loaded ? resetButton : jsonDropZone}
        </div>
      </Provider>
    );
  }
}

export default App;
