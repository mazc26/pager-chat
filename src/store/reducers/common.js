import { createSlice } from '@reduxjs/toolkit';
import { parseMessages } from '../../utils/parseMessages';

let initialState = {
  gifs: [],
  gifError: null,
  username: null,
  messages: [],
  pagination: null,
  isSearchingGifs: false,
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setMessages(state, action) {
      state.messages = parseMessages(state.messages, action.payload);
    },
    setIsFetching(state, action) {
      
    },
    searchGifs(state) {
      state.isRandom ? state.gifs = [] : state.gifs;
      state.isSearchingGifs = true;
    },
    searchGifsSuccess(state, action) {
      state.isRandom = false;
      state.pagination = action.payload.pagination
      state.isSearchingGifs = false;
      state.gifs = [...state.gifs, ...action.payload.data]
    },
    searchGifsError(state, action) {
      state.isFetchingGifs = false;
      state.gifError = action.payload;
      console.error(action.payload);
    },
    searchRandomGifs(state) {
      state.isSearchingGifs = true;
    },
    searchRandomGifsSuccess(state, action) {
      state.isRandom = true;
      state.pagination = action.payload.pagination
      state.isSearchingGifs = false;
      state.gifs = [...state.gifs, ...action.payload.data]
    },
    searchRandomGifsError(state, action) {
      state.isSearchingGifs = false;
      state.gifError = action.payload;
      console.error(action.payload);
    },
  }
})

export const { 
  //common functions
  setUsername,
  setMessages,
  setIsFetching,
  //giphy actions
  searchGifs,
  searchGifsSuccess,
  searchGifsError,
  searchRandomGifs,
  searchRandomGifsSuccess,
  searchRandomGifsError,
} = commonSlice.actions

export default commonSlice.reducer
