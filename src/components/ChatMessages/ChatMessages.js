import React, { Fragment, useEffect, useState } from 'react';

import { parseDate } from '../../utils/parseDate';
import Avatar from '../Avatar';

import './ChatMessages.scss';

const ChatMessages = ({ messages, userConnected }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true)
  }, [])

  useEffect(() => {
    if (userConnected) {
      setIsLoading(false)
    } 
  }, [userConnected])

  useEffect(() => {
    if (document.getElementById("bottom-container")) {
      document.getElementById("bottom-container").scrollIntoView()  
    }
  }, [messages])

  const getMessageByType = message => {
    switch(message.type) {
      case 'image': 
        return <img className="chat-gif-img" src={message.url} />;
      default:
        return message.text
    }
  }

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader">Loading...</div>
      </div> 
    )
  }

  if (userConnected && !isLoading && !messages.length) {
    return (
      <div className="no-msgs">
        Theres no messages available right now, please type something to start chating
      </div>
    )
  }

  return (
    <Fragment>
      <div>
        {
          messages.map((message, index) => (
            <div key={index} className="message-container">
              {
                <Avatar username={message.username} />
              }
              <div className="message-content-container">
                <div className="name-hour-container">
                  <div className="username">
                    {message.username}
                  </div>
                  <div className="hour">
                    {parseDate(message.time)}
                  </div>
                </div>
                <div className="message">
                  {getMessageByType(message)}
                  {
                    message.groupedMessages && 
                    message.groupedMessages.map((message, index) => 
                      <div key={index}>{getMessageByType(message)}</div>
                    )
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div id="bottom-container" />
    </Fragment>
  )
};

export default ChatMessages;