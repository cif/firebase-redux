import React, { PropTypes } from 'react';
import userShape from '../shapes/user';

class LoginOrSignup extends React.Component {

  handleSignUp = () => {
    this.props.onSignUp(this.email.value, this.pass.value);
  }

  handleSignIn = () => {
    this.props.onSignIn(this.email.value, this.pass.value);
  }

  render() {
    const { user } = this.props;
    const { uid, error, isInFlight } = user;

    // dont render if user is logged in
    if (uid) {
      return null;
    }

    return (
      <div>
        <h1>Login or signup!</h1>
        {error && <h2>{error.message}</h2>}
        {isInFlight && <h3>Loading...</h3>}
        <input
          ref={(email) => { this.email = email; }}
          type="email"
          value={user.email}
          onChange={val => val}
        />
        <input ref={(pass) => { this.pass = pass; }} type="password" />
        <button onClick={this.handleSignUp}>SIGN UP</button>
        OR
        <button onClick={this.handleSignIn}>SIGN IN</button>
      </div>
    );
  }
}

LoginOrSignup.propTypes = {
  user: PropTypes.shape(userShape),
  onSignUp: PropTypes.func,
  onSignIn: PropTypes.func
};

export default LoginOrSignup;
