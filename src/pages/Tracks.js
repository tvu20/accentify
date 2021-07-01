import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/UI/Header';
import Tracklist from '../components/Track/Tracklist';

import { playlistActions } from '../store/playlist';

const DESC =
  'Relive your favorite tunes from your entire Spotify history, or that one song you found six months ago that you just can’t get out of your head.';

const Tracks = () => {
  const dispatch = useDispatch();
  const topTracks = useSelector(state => state.tracks.top_tracks);

  const addToPlaylist = track => {
    dispatch(playlistActions.addTrack(track));
  };

  const addAllToPlaylist = () => {
    for (const song of topTracks) {
      dispatch(playlistActions.addTrack(song));
    }
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
      />
      {/* <h1>TRACKS</h1> */}
      <Tracklist tracklist={topTracks} onClick={addToPlaylist} />
      {/* <button onClick={addAllToPlaylist} className='btn mobile-only'>
        Add all to playlist
      </button> */}
    </div>
  );
};

export default Tracks;
