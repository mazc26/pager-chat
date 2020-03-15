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
  const [userConnected, setUserConnected] = useState(false);

  useEffect(() => {
    if (!username) {
      history.push("/")
    }
  }, [username]);

  useEffect(() => {
    if (socket) {
      socket.on('message', setMessages)
      socket.once('user-connected', username => {
        setUserConnected(true)
      })
    }
  }, [socket])

  const handleChange = message => {
    if (message === "/gif") {
      setShowGif(true);
    }
    socket.emit('typing', !!message.length);
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

  const handleBlur = () => {
    socket.emit('typing', false);
  }

  const handleFocus = () => {
    socket.emit('typing', !!message.length);
  }

  const handleGifClose = () => {
    if (message === "/gif")
    setMessage("")
  }

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div id="scrollBottom" className="chat-message-container">
          <div className="chats">
            <ChatMessages userConnected={userConnected} />
            {
              showGif &&
                <GifMessages 
                  socket={socket} 
                  setShowGif={setShowGif}
                  onClose={handleGifClose} 
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
            onFocus={handleFocus}
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