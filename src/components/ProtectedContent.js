import React, { PropTypes } from 'react';
import userShape from '../shapes/user';

export const ProtectedContent = (props) => {
  const { user, onSignOut } = props;

  // dont render when not logged in
  if (!user.uid) {
    return null;
  }

  return (
    <div>
      Hi {user.email}!
      <a
        href=""
        onClick={
          (e) => {
            e.preventDefault();
            onSignOut();
          }}
      >
        Sign Out
      </a>
    </div>
  );
};

ProtectedContent.propTypes = {
  user: PropTypes.shape(userShape),
  onSignOut: PropTypes.func
};

export default ProtectedContent;
