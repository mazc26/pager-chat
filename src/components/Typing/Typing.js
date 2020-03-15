import React, { useEffect, useState } from 'react';

import './Typing.scss';

const Typing = ({ socket, username }) => {
  const [typers, setTypers] = useState([]);
  useEffect(() => {
      if (socket) {
        socket.on('is-typing', typers => {
          const filteredTypers = ( 
            Object
            .keys(typers)
            .filter(typer => typer !== username && typers[typer])
            .map(typer => typer)
          );
          setTypers(filteredTypers);
        });
      }
  }, [socket])

  const getTypers = typers => {
    if (typers.length === 1) {
      return `${typers[0]} is typing`;
    } else if (typers.length > 1) {
      return 'People are typing';
    } else if (!typers || !typers.length) {
      return null;
    } else {
      return null;
    }
  }

  return (
    <div className="typing-container">
      <div className="type-message">
        {getTypers(typers)}
      </div>
    </div>
  )
}

export default Typing;