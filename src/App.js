import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import JsonDropZone from './JsonDropZone.js';
import { loadAnimation } from 'bodymovin';

class App extends Component {
  static async get() {
    return await axios.get('/data.json');
  }

  render() {
    const data = App.get();
    data.then(d => {
      console.log(d.data);

      loadAnimation({
        container: document.getElementById("test") , // the dom element
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: d.data // the animation data
      });
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>bodymovin-preview</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <JsonDropZone/>
        <input type="button" value={"load"}/>
      </div>
    );
  }
}

export default App;
