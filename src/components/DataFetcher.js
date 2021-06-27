import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router';

import Navigation from './Navigation';

import {
  fetchTrackData,
  fetchArtistData,
  fetchRecentData,
} from '../store/track-actions';

const DataFetcher = props => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const history = useHistory();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    history.replace('/login');
  }

  useEffect(() => {
    // console.log(' in a route!');
    dispatch(fetchTrackData(accessToken));
    dispatch(fetchArtistData(accessToken));
    dispatch(fetchRecentData(accessToken));
  }, [dispatch, accessToken]);

  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
};

export default DataFetcher;
