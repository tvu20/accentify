import { createSlice } from '@reduxjs/toolkit';

const initState = {
  top_tracks: [],
  top_artists: [],
  recently_played: [],
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState: initState,
  reducers: {
    setTracks(state, action) {
      state.top_tracks = action.payload.items;
    },
    setArtists(state, action) {
      state.top_artists = action.payload.items;
    },
    setRecent(state, action) {
      state.recently_played = action.payload.items;
    },
  },
});

export const trackActions = trackSlice.actions;

export default trackSlice.reducer;
