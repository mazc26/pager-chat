import { GIPHY_API_KEY } from '../api/constants';

export const apiParser = (route, method, payload) => {
  const BASE_URL = "https://api.giphy.com/v1/gifs/";
  const url = (
    route === "trending" ? `${BASE_URL}${route}?limit=24&offset=${payload}&api_key=${GIPHY_API_KEY}` : 
    `${BASE_URL}${route}?q=${payload.value}&limit=24&offset=${payload.offset}&api_key=${GIPHY_API_KEY}`
  );
  return (
    fetch(url , {
      method, 
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then(data => data)
    .catch()
  )
};