import React, { useState, useEffect } from 'react';

import Input from '../Input';
import GifPagination from './GifPagination';

import './GifMessages.scss';

const GifMessages = ({ 
    setShowGif, 
    searchGifs, 
    gifs, 
    socket, 
    searchRandomGifs, 
    isSearchingGifs,
    onClose, 
  }) => {

  const [value, setValue] = useState("");
  
  useEffect(() => {
    searchRandomGifs(0);
  }, [])

  const handleChange = value => {
    setValue(value)
    searchGifs({offset: 0, value})
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
    if (!value.length && !gifs.length) {
      searchRandomGifs(0);
    } else if (isSearchingGifs) {
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