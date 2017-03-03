import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class JsonDropZone extends Component {
  constructor() {
    super();
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles){
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
  }

  render() {
    return (
        <Dropzone onDrop={this.onDrop} accept="image/gif,image/jpeg,image/png,image/jpg">
        </Dropzone>
    );
  }
}

export default JsonDropZone;
