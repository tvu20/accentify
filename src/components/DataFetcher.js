import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router';

import Navigation from './Navigation/Navigation';

import {
  fetchTrackData,
  fetchArtistData,
  fetchRecentData,
} from '../store/track-actions';

const DataFetcher = props => {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');
  const history = useHistory();

  if (!localStorage.getItem('isLoggedIn')) {
    history.replace('/login');
  }

  useEffect(() => {
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
