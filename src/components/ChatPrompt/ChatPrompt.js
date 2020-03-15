import React, { useState, useEffect } from 'react';

import Input from '../Input';

import './ChatPrompt.scss';

const ChatPrompt = ({ onConnectSocket, history, username, setUsername }) => {
  const [isDisabled, setDisabled] = useState(true);
  const [user, setUser] = useState("");
  
  useEffect(() => {
    if (username) {
      history.push("chat");
    }
  }, [username])

  const handleChange = user => {
    setUser(user)
    setDisabled(!user.length)
  }

  const handleClick = () => {
    setUsername(user);
    onConnectSocket(user);
  }

  return (
    <div className="chat-prompt-container">
      <div className="prompt-box">
        <div className="main-title">
          Join Chat
        </div>
        <div className="name-input">
          Please enter your username
        </div>
        <div className="input-container">
          <Input onChange={handleChange} />
        </div>
        <div className="btn-container">
          <button 
            disabled={isDisabled} 
            className="btn"
            onClick={handleClick}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatPrompt;