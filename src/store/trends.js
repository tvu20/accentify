import { createSlice } from '@reduxjs/toolkit';

const initState = {
  acousticness: 0,
  danceability: 0,
  energy: 0,
  duration: 0,
  speechiness: 0,
  tempo: 0,
  valence: 0,
};

const trendSlice = createSlice({
  name: 'trends',
  initialState: initState,
  reducers: {
    setTrends(state, action) {
      state.acousticness = action.payload.acousticness;
      state.danceability = action.payload.danceability;
      state.energy = action.payload.energy;
      state.duration = action.payload.duration;
      state.speechiness = action.payload.speechiness;
      state.tempo = action.payload.tempo;
      state.valence = action.payload.valence;
    },
  },
});

export const trendActions = trendSlice.actions;

export default trendSlice.reducer;
