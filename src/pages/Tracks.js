import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/UI/Header';
import Tracklist from '../components/Track/Tracklist';

import { playlistActions } from '../store/playlist';

const DESC =
  'Relive your favorite tunes from your entire Spotify history, or that one song you found six months ago that you just can’t get out of your head.';

const Tracks = () => {
  const [timePeriod, setTimePeriod] = useState(0);
  const dispatch = useDispatch();
  const topTracks = useSelector(state => state.tracks.top_tracks);
  const last6m = useSelector(state => state.tracks.top_6m_tracks);
  const lastMonth = useSelector(state => state.tracks.top_m_tracks);

  const addToPlaylist = track => {
    dispatch(playlistActions.addTrack(track));
  };

  const addAllToPlaylist = () => {
    for (const song of topTracks) {
      dispatch(playlistActions.addTrack(song));
    }
  };

  const timePeriodHandler = id => {
    setTimePeriod(id);
  };

  const trackDisplay = () => {
    if (timePeriod === 0) return topTracks;
    else if (timePeriod === 1) return last6m;
    else return lastMonth;
  };

  return (
    <div className='page'>
      <Header
        title='Top Tracks'
        image='tracks'
        description={DESC}
        showTimes={true}
        showButton={true}
        onButtonClick={addAllToPlaylist}
        buttonText='Add all to playlist'
        setTime={timePeriodHandler}
      />
      <Tracklist
        tracklist={trackDisplay()}
        onClick={addToPlaylist}
        actionButton={addAllToPlaylist}
      />
    </div>
  );
};

export default Tracks;
