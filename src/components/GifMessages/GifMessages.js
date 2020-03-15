import React, { useState, useEffect, useRef } from 'react';

import Input from '../Input';
import GifPagination from './GifPagination';

import './GifMessages.scss';

const GifMessages = ({ 
    setShowGif, 
    searchGifs, 
    gifs, 
    socket, 
    isSearchingGifs,
    onClose, 
  }) => {

  const [value, setValue] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    searchGifs({offset: 0, value: ""});
  }, [])

  const handleChange = value => {
    setValue(value)
    if (timeoutRef.current !== null) {  
      clearTimeout(timeoutRef.current);         
    }

    timeoutRef.current = setTimeout(()=> {    
      timeoutRef.current = null;                
      searchGifs({offset: 0, value})         
    }, 500); 
  }

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
    setShowGif(false)
  }

  const handleSendGif = (url, alt) => {
    socket.emit('image-message', {url, alt});
    handleClose();
  };

  const getGifs = () => {
    if (isSearchingGifs) {
      return <div className="loader-container gif-container"><div className="loader">Loader...</div></div>
    } else if (!isSearchingGifs && !gifs.length && !value.length) {
      return <div className="no-gifs-found">No gifs found, please try with a different criteria</div>
    } else {
      return (
        !!gifs.length && gifs.map((gif, index) => (
        <img 
          key={index}
          onClick={()=> {
            handleSendGif(
              gif.images.preview_gif.url, gif.images.preview_gif.alt
            )
          }} 
          className="gif-img"
          src={gif.images.preview_gif.url} 
          alt={gif.images.preview_gif.url} 
        />
      )))
    }
  }

  return (
    <div className="gif-message-container">
      <div onClick={handleClose} className="gif-close-btn">
        ×
      </div>
      <div className="search-bar-container">
        <Input 
          autoFocus
          value={value} 
          onChange={handleChange} 
          placeholder="Type to search a gif" 
        />
      </div>
      <div className="gif-content">
        {
          getGifs()
        } 
        <GifPagination value={value} />
      </div>
    </div>
  )
}

export default GifMessages;