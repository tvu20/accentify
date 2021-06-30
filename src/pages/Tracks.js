import { useSelector, useDispatch } from 'react-redux';

import Tracklist from '../components/Track/Tracklist';

import { playlistActions } from '../store/playlist';

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
    <div>
      <h1>TRACKS</h1>
      <Tracklist tracklist={topTracks} onClick={addToPlaylist} />
      <button onClick={addAllToPlaylist}>Add all to playlist</button>
    </div>
  );
};

export default Tracks;
