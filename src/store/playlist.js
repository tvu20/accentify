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
      const pId = { playlist_id: state.count };
      const newTrack = { ...action.payload, ...pId };

      state.count += 1;
      state.tracklist.push(newTrack);
    },
    removeTrack(state, action) {
      const newPlaylist = state.tracklist.filter(
        track => track.playlist_id !== action.payload
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
