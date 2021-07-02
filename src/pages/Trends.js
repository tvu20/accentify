import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTrends, fetchRecs } from '../store/trend-actions';

import Header from '../components/UI/Header';
import Attributes from '../components/Trends/Attributes';
import DataTest from '../components/DataTest';

let generated = false;

const DESC =
  'Discover what your preferred musical qualities are, from acousticness to danceability, and discover a collection of songs curated just for you.';

const Trends = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const topTracks = useSelector(state => state.tracks.top_tracks);

  useEffect(() => {
    if (!generated) {
      console.log('getting recs');
      dispatch(fetchTrends(accessToken, topTracks));
      // dispatch(fetchRecs(accessToken, topTracks));
      generated = true;
    }
  }, [dispatch, accessToken, topTracks]);

  return (
    <div className='page'>
      <Header
        title='Trends'
        image='trends'
        description={DESC}
        showTimes={false}
        showButton={false}
      />
      <Attributes />

      {/* <DataTest /> */}
    </div>
  );
};

export default Trends;
