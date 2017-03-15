import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css';
import reducer from './reducer.js';
import JsonDropZone from './JsonDropZone.js';
import { loadAnimation } from 'bodymovin';
import { Button, Toolbar, NavItem, Space, Container } from 'rebass'

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

    const jsonDropZone = <JsonDropZone onDrop={this.onDrop}/>;
    const resetButton = <Button onClick={this.onClick}>Reset</Button>;

    return (
      <Provider store={store}>
        <div className="App">
          <Toolbar>
            AE Web Preview
            <Space
              auto
              x={1}
            />
            <NavItem is="a">
              About
            </NavItem>
          </Toolbar>
          <Container style={{margin: '20px auto', }}>
            {this.state.loaded ? resetButton : jsonDropZone}
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
