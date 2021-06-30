import { useSelector, useDispatch } from 'react-redux';

import Tracklist from '../components/Track/Tracklist';

import CreatePlaylist from '../components/CreatePlaylist';

import { playlistActions } from '../store/playlist';

const Play = () => {
  const dispatch = useDispatch();
  const playlist = useSelector(state => state.playlist.tracklist);

  const removeFromPlaylist = track => {
    dispatch(playlistActions.removeTrack(track.id));
  };

  const clearPlaylist = () => {
    dispatch(playlistActions.clearPlaylist());
  };

  return (
    <div>
      <Tracklist tracklist={playlist} onClick={removeFromPlaylist} />
      {playlist.length > 0 && (
        <button onClick={clearPlaylist}>Clear playlist</button>
      )}
      <CreatePlaylist />
    </div>
  );
};

export default Play;
