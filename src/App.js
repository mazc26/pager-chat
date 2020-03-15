import React, { useState } from 'react';
import io from 'socket.io-client';

import Routes from './router/Routes';

import './App.scss';

const App = () => {
  const [socket, setSocket] = useState(null);

  const onConnectSocket = username => {
    const socket = io(`https://pager-hiring.herokuapp.com/?username=${username}`);
    setSocket(socket);
  }

  const childProps = {
    socket,
    onConnectSocket,
  }
 
  return (
    <div className="app-container">
      <Routes childProps={childProps} />
    </div>
  )
};

export default App;