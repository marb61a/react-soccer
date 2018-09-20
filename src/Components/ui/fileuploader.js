import React, { Component } from 'react';
import { firebase } from '../../firebase';
import FileUploader from 'react-firebase-file-uploader';
import CircularProgress from '@material-ui/core/CircularProgress';

class Fileuploader extends Component {
  state = {
    name: '',
    isUploading: false
  };

  handleUploadStart = () => {
    this.setState({
      isUploading: true
    });
  }

  handleUploadError = () => {
    this.setState({
      isUploading: false
    });
  }

  handleUploadSuccess = (filename) => {
    console.log(filename);

    this.setState({
      name: filename,
      isUploading: false
    });

  }

  render(){
    return (
      <div>
        {
          this.state.fileURL ?
          <div>
            <div className="label_inputs">
              {this.props.tag}
            </div>
            
          </div> :
          null
        }
      </div>
    );
  }
}

export default Fileuploader;