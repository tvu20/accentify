import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import trackReducer from './tracks';
import trendReducer from './trends';

const store = configureStore({
  reducer: { auth: authReducer, tracks: trackReducer, trends: trendReducer },
});

export default store;
