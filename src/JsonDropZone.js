import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Backup from 'react-icons/lib/md/backup';

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
        <div style={{fontSize: 20, color: '#A4A4A4'}}>
          <Backup size={120}/> <br/>
          Try dropping bodymovin json file here, <br/>
          or click to select file to preview.
        </div>
      </Dropzone>
    </div>
    );
  }
}

export default JsonDropZone;
