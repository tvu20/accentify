import { useSelector, useDispatch } from 'react-redux';

import HeaderOne from '../../components/UI/HeaderOne';
import Tracklist from '../../components/Track/Tracklist';

import { playlistActions } from '../../store/playlist';

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
      <HeaderOne title='Top Tracks' description={DESC} />
      {/* <h1>TRACKS</h1> */}
      <Tracklist tracklist={topTracks} onClick={addToPlaylist} />
      <button onClick={addAllToPlaylist}>Add all to playlist</button>
    </div>
  );
};

export default Tracks;
