import React, { Component } from 'react';
import { firebase } from '../../firebase';
import FileUploader from 'react-firebase-file-uploader';
import CircularProgress from '@material-ui/core/CircularProgress';

class Fileuploader extends Component {
  state = {
    name: '',
    isUploading: false,
    fileURL:''
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

    firebase.storage().ref(this.props.dir)
      .child(filename).getDownloadURL()
      .then(url => {
        this.setState({
          fileURL: url
        });
      })

      this.props.filename(filename);
  }

  static getDerivedStateFromProps(props, state) {
    if(props.defaultImg) {
      return state = {
        name: props.defaultImgName,
        fileURL: props.defaultImg
      };
    }

    return null;
  }

  uploadAgain = () => {
    this.setState({
      name: '',
      isUploading: false,
      fileURL: ''
    });

    this.props.resetImage();
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