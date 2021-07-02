import { createSlice } from '@reduxjs/toolkit';

const initState = {
  top_tracks: [],
  top_6m_tracks: [],
  top_m_tracks: [],
  top_artists: [],
  top_6m_artists: [],
  top_m_artists: [],
  recently_played: [],
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState: initState,
  reducers: {
    setTracks(state, action) {
      state.top_tracks = action.payload.topAll;
      state.top_6m_tracks = action.payload.top6;
      state.top_m_tracks = action.payload.topM;
    },
    setArtists(state, action) {
      state.top_artists = action.payload.topAll;
      state.top_6m_artists = action.payload.top6;
      state.top_m_artists = action.payload.topM;
    },
    setRecent(state, action) {
      state.recently_played = action.payload.items;
    },
  },
});

export const trackActions = trackSlice.actions;

export default trackSlice.reducer;
