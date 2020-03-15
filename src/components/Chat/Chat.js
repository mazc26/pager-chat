import React, { useEffect, useState } from 'react';

import Input from '../Input';
import Typing from '../Typing';
import ChatMessages from '../ChatMessages';
import GifImg from '../../assets/images/gif.png';
import GifMessages from '../GifMessages';

import './Chat.scss';

const Chat = ({ socket, username, history, setMessages }) => {
  const [message, setMessage] = useState("");
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    if (!username) {
      history.push("/")
    }
  }, [username]);

  useEffect(() => {
    if (socket) {
      socket.on('message', setMessages)
    }
  }, [socket])

  const handleChange = message => {
    socket.emit('typing', message.length);
    setMessage(message);
  }

  const sendMessage = () => {
    setMessage("")
    socket.emit('text-message', message);
  }

  const onKeyPress = e => {
    if(e.which === 13) {
      sendMessage(message)
    }
  }

  const handleBlur = e => {
    socket.emit('typing', false);
  }

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div id="scrollBottom" className="chat-message-container">
          <div className="chats">
            <ChatMessages />
            {
              showGif &&
                <GifMessages 
                  socket={socket} 
                  setShowGif={setShowGif} 
                />
            } 
          </div>
        </div>
        <div className="input-btn-container">
          <Input 
            maxLength="75"
            onKeyPress={onKeyPress} 
            onChange={handleChange} 
            placeholder={"type message here"} 
            value={message}
            onBlur={handleBlur}
          />
          <img 
            src={GifImg} 
            onClick={()=> setShowGif(!showGif)}
            className="gif-btn"
          />
          <button 
            onClick={sendMessage}
            disabled={!message.length} 
            className="chat-btn"
          >
            Send
          </button>
        </div>
        <Typing socket={socket} />
      </div>
    </div>
  )
};

export default Chat;