import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createNewUser, logInUser, logOutUser } from '../redux/user';
import LoginOrSignup from '../components/LoginOrSignup';
import ImageUploader from '../components/ImageUploader';
import ProtectedContent from '../components/ProtectedContent';
import userShape from '../shapes/user';

const selector = state => ({
  count: state.counter,
  user: state.user
});

const dispatcher = dispatch => ({
  signUpNewUser: (email, password) => dispatch(createNewUser(email, password)),
  signInUser: (email, password) => dispatch(logInUser(email, password)),
  signOutUser: () => dispatch(logOutUser())
});

export class App extends React.Component {
  constructor() {
    super();
    this.not_useless = true;
  }
  render() {
    const {
      user,
      signUpNewUser,
      signInUser,
      signOutUser
    } = this.props;
    return (
      <div>
        <LoginOrSignup
          user={user}
          onSignUp={signUpNewUser}
          onSignIn={signInUser}
        />
        <ProtectedContent
          user={user}
          onSignOut={signOutUser}
        />
        <ImageUploader fileName="test.jpg" />
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.shape(userShape),
  signUpNewUser: PropTypes.func,
  signInUser: PropTypes.func,
  signOutUser: PropTypes.func
};

export default connect(selector, dispatcher)(App);
