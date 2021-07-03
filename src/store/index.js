import { configureStore } from '@reduxjs/toolkit';

import trackReducer from './tracks';
import trendReducer from './trends';
import playlistReducer from './playlist';

const store = configureStore({
  reducer: {
    tracks: trackReducer,
    trends: trendReducer,
    playlist: playlistReducer,
  },
});

export default store;
