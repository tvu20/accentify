import { createSlice } from '@reduxjs/toolkit';

const initState = {
  count: 0,
  tracklist: [],
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: initState,
  reducers: {
    addTrack(state, action) {
      state.count += 1;
      state.tracklist.push(action.payload);
    },
    removeTrack(state, action) {
      //   state.count -= 1;
      const newPlaylist = state.tracklist.filter(
        track => track.id !== action.payload
      );

      if (newPlaylist.length !== state.tracklist.length) {
        state.count -= 1;
        state.tracklist = newPlaylist;
      }
    },
    clearPlaylist(state, action) {
      state.tracklist = [];
      state.count = 0;
    },
  },
});

export const playlistActions = playlistSlice.actions;

export default playlistSlice.reducer;
