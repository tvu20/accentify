import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTrends, fetchRecs } from '../store/trend-actions';

import DataTest from '../components/DataTest';

let generated = false;

const Trends = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const topTracks = useSelector(state => state.tracks.top_tracks);

  useEffect(() => {
    if (!generated) {
      console.log('getting recs');
      dispatch(fetchTrends(accessToken, topTracks));
      dispatch(fetchRecs(accessToken, topTracks));
      generated = true;
    }
  }, [dispatch, accessToken, topTracks]);

  return (
    <div>
      <DataTest />
    </div>
  );
};

export default Trends;
