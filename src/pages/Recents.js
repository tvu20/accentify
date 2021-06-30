import { useSelector, useDispatch } from 'react-redux';

import Tracklist from '../components/Track/Tracklist';

import { playlistActions } from '../store/playlist';

const Recents = () => {
  const dispatch = useDispatch();
  const recents = useSelector(state => state.tracks.recently_played);

  const addToPlaylist = track => {
    dispatch(playlistActions.addTrack(track));
  };

  const addAllToPlaylist = () => {
    for (const song of recents) {
      dispatch(playlistActions.addTrack(song.track));
    }
  };

  return (
    <div>
      <h1>RECENTS</h1>
      <Tracklist tracklist={recents} onClick={addToPlaylist} recent={true} />
      <button onClick={addAllToPlaylist}>Add all to playlist</button>
    </div>
  );
};

export default Recents;
