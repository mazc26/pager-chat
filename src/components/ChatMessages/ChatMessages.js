import React, { Fragment, useEffect } from 'react';

import { parseDate } from '../../utils/parseDate';
import Avatar from '../Avatar';

import './ChatMessages.scss';

const ChatMessages = ({ messages, theresNoMessages }) => {

  const getMessageByType = message => {
    switch(message.type) {
      case 'image': 
        return <img className="chat-gif-img" src={message.url} />;
      default:
        return message.text
    }
  }

  useEffect(() => {
    if (document.getElementById("bottom-container")) {
      document.getElementById("bottom-container").scrollIntoView()  
    }
  }, [messages])

  return (
    <Fragment>
      <div>
        {
          messages.length ? messages.map((message, index) => (
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
          )) :
          <div className="loader-container">
            <div className="loader">Loading...</div>
          </div> 
        }
      </div>
      <div id="bottom-container"></div>
    </Fragment>
  )
};

export default ChatMessages;