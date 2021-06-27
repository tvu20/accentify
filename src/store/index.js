import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import trackReducer from './tracks';
import trendReducer from './trends';
import playlistReducer from './playlist';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tracks: trackReducer,
    trends: trendReducer,
    playlist: playlistReducer,
  },
});

export default store;
