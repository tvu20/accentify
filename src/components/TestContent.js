import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchTrackData,
  fetchArtistData,
  fetchRecentData,
} from '../store/track-actions';

const TestContent = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);

  useEffect(() => {
    dispatch(fetchTrackData(accessToken));
    // console.log('fetched song data');
    dispatch(fetchArtistData(accessToken));
    // console.log('fetched artist data');
    dispatch(fetchRecentData(accessToken));
    // console.log('fetched recent data');
  }, [dispatch, accessToken]);

  return <h1>ACCENTIFY</h1>;
};

export default TestContent;
