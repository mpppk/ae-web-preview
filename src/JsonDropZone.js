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

    const dropZoneStyle = {
      width: '50%',
      height: 200,
      borderWidth: 8,
      borderColor: '#A4A4A4',
      borderStyle: 'dashed',
      borderRadius: 5,
      margin: '0 auto'
  };

    return (
    <div style={this.props.style}>
      <Dropzone style={dropZoneStyle} onDrop={this.onDrop} accept="application/json">
        Try dropping some files here, or click to select files to upload.
      </Dropzone>
    </div>
    );
  }
}

export default JsonDropZone;
