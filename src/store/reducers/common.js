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
    searchGifs(state, action) {
      state.isSearchingGifs = true;
      state.gifs = action.payload.offset ? state.gifs : [];
    },
    searchGifsSuccess(state, action) {
      state.pagination = action.payload.pagination
      state.isSearchingGifs = false;
      state.gifs = [...state.gifs, ...action.payload.data]
    },
    searchGifsError(state, action) {
      state.isFetchingGifs = false;
      state.gifError = action.payload;
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
} = commonSlice.actions

export default commonSlice.reducer
