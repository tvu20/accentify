import { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/UI/Header';
import ArtistList from '../components/Artists/ArtistList';

const DESC =
  'A collection of the musicians you have listened to the most over the last few months, or your favorite artists and singers of all time.';

const Artists = () => {
  const [timePeriod, setTimePeriod] = useState(0);
  const topArtists = useSelector(state => state.tracks.top_artists);
  const last6m = useSelector(state => state.tracks.top_6m_artists);
  const lastMonth = useSelector(state => state.tracks.top_m_artists);

  const timePeriodHandler = id => {
    setTimePeriod(id);
  };

  const artistDisplay = () => {
    if (timePeriod === 0) return topArtists;
    else if (timePeriod === 1) return last6m;
    else return lastMonth;
  };

  return (
    <div className='page'>
      <Header
        title='Top Artists'
        image='artists'
        description={DESC}
        showTimes={true}
        showButton={false}
        setTime={timePeriodHandler}
      />
      <ArtistList artistList={artistDisplay()} />
    </div>
  );
};

export default Artists;
