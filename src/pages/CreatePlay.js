import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/UI/Header';
import Tracklist from '../components/Track/Tracklist';
import CreatePlaylist from '../components/CreatePlaylist';

import { playlistActions } from '../store/playlist';

const DESC =
  'See your collection of saved songs, whether brand new or beloved tracks, and create a playlist to send to your Spotify account for your listening pleasure.';

const Play = () => {
  const dispatch = useDispatch();
  const playlist = useSelector(state => state.playlist.tracklist);

  const removeFromPlaylist = track => {
    dispatch(playlistActions.removeTrack(track.id));
  };

  const clearPlaylist = () => {
    dispatch(playlistActions.clearPlaylist());
  };

  const createPlaylistHandler = () => {
    console.log('create playlist');
  };

  return (
    <div className='page'>
      <Header
        title='Create'
        image='create'
        description={DESC}
        showTimes={false}
        showButton={true}
        onButtonClick={createPlaylistHandler}
        buttonText='Create Playlist'
      />
      <Tracklist tracklist={playlist} onClick={removeFromPlaylist} />
      {playlist.length > 0 && (
        <button onClick={clearPlaylist}>Clear playlist</button>
      )}
      <CreatePlaylist />
    </div>
  );
};

export default Play;
