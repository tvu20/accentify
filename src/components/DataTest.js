import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTrends } from '../store/trend-actions';

const DataTest = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const topTracks = useSelector(state => state.tracks.top_tracks);

  useEffect(() => {
    dispatch(fetchTrends(accessToken, topTracks));
  }, [dispatch, accessToken, topTracks]);

  return <div>DATA TESTING</div>;
};

export default DataTest;
