import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTrends, fetchRecs } from '../store/trend-actions';

const DataTest = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const topTracks = useSelector(state => state.tracks.top_tracks);
  // const topArtists = useSelector(state => state.tracks.top_artists);
  // const trends = useSelector(state => state.trends);

  useEffect(() => {
    dispatch(fetchTrends(accessToken, topTracks));
    dispatch(fetchRecs(accessToken, topTracks));
  }, [dispatch, accessToken, topTracks]);

  return <div>TESTING DATA</div>;
};

export default DataTest;
