import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import { loadAnimation } from 'bodymovin';

class JsonDropZone extends Component {
  constructor() {
    super();
    this.onDrop = this.onDrop.bind(this);
    this.state = {};
    this.reader = this.createFileReader();
  }

  createFileReader() {
    let reader = new FileReader();
    reader.onload = () => this.setState({animData: JSON.parse(reader.result)});
    return reader;
  }

  onDrop(acceptedFiles, rejectedFiles){
    this.reader.readAsText(acceptedFiles[0]);
  }

  render() {
    loadAnimation({
      container: document.getElementById("test") , // the dom element
      renderer: 'canvas',
      loop: true,
      autoplay: true,
      animationData: this.state.animData // the animation data
    });

    return (
        <Dropzone onDrop={this.onDrop} accept="application/json">
        </Dropzone>
    );
  }
}

export default JsonDropZone;
