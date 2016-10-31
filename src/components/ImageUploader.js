import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import firebase from '../firebase/';

class ImageUploader extends React.Component {

  constructor() {
    super();
    this.state = {
      uploadValue: 0
    };
  }

  componentDidMount() {
    firebase.storage().ref('ugc').child(`pictures/${this.props.fileName}`).getDownloadURL()
      .then((url) => {
        this.setState({ picture: url });
      });
  }

  handleOnChange = (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref('ugc').child(`pictures/${this.props.fileName}`);
    const task = storageRef.put(file);

    task.on('state_changed', (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue: percentage
      });
    }, (error) => {
      throw error;
    }, () => {
      // Upload complete
      this.setState({
        picture: task.snapshot.downloadURL
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Do you even upload bro?</h1>
        <progress value={this.state.uploadValue} max="100">
          {this.state.uploadValue} %
        </progress>
        <br />
        <input type="file" onChange={this.handleOnChange} />
        <br />
        <img width="90" src={this.state.picture} alt="TBD" />
        <Link to="/test">testing</Link>
      </div>
    );
  }
}

ImageUploader.propTypes = {
  fileName: PropTypes.string
};

export default ImageUploader;
