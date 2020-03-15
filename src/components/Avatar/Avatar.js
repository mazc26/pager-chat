import React, { useEffect } from 'react';

import './Avatar.scss';

const Avatar = ({ username }) => {
  return (
    <div>
      <img
        className="avatar-img"
        src={`https://ui-avatars.com/api/?name=${username}`} 
        alt={`https://ui-avatars.com/api/?name=${username}`}
      />
    </div>
  )
};

export default Avatar;