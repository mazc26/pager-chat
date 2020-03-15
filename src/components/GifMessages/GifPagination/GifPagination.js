import React, { useEffect, useState } from 'react';

import './GifPagination.scss';

const GifPagination = ({ 
    pagination, 
    gifs, 
    isRandom, 
    value, 
    searchGifs, 
    searchRandomGifs,
    isSearchingGifs,
  }) => {
  const [hasMoreItems, setHasMoreItems] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (pagination) {
      setHasMoreItems(pagination.total_count > pagination.count)
      setOffset(pagination.offset + 24)
    }
  }, [pagination, gifs])

  const handleLoadMore = () => {
    if (isRandom) {
      searchRandomGifs(offset)
    } else {
      searchGifs({value, offset})
    }
  }

  return (
    <div className="gif-pagination-container">
      {
        hasMoreItems &&
        <button
          className="btn"
          disabled={isSearchingGifs}
          onClick={handleLoadMore}>
            Load More
        </button>
      }
    </div>
  )
}

export default GifPagination;