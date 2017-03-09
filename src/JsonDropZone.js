import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class JsonDropZone extends Component {
  constructor() {
    super();
    this.onDrop = this.onDrop.bind(this);
    this.reader = this.createFileReader();
  }

  createFileReader() {
    let reader = new FileReader();
    reader.onload = () => this.props.onDrop(JSON.parse(reader.result));
    return reader;
  }

  onDrop(acceptedFiles, rejectedFiles){
    this.reader.readAsText(acceptedFiles[0]);
  }

  render() {
    return (
        <Dropzone onDrop={this.onDrop} accept="application/json">
        </Dropzone>
    );
  }
}

export default JsonDropZone;
