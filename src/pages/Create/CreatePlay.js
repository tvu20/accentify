import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/UI/Header';
import Tracklist from '../../components/Track/Tracklist';

import { playlistActions } from '../../store/playlist';
import { createPlaylist, populatePlaylist } from '../../store/playlist-actions';

import './create.css';

const DESC =
  'See your collection of saved songs, whether brand new or beloved tracks, and create a playlist to send to your Spotify account for your listening pleasure.';

const Play = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const userId = useSelector(state => state.auth.userId);
  const playlist = useSelector(state => state.playlist.tracklist);

  const removeFromPlaylist = track => {
    dispatch(playlistActions.removeTrack(track.id));
  };

  const clearPlaylist = () => {
    dispatch(playlistActions.clearPlaylist());
  };

  const createPlaylistHandler = () => {
    let playlistId = '';
    let songUris = '';

    // console.log(userId);
    createPlaylist(accessToken, userId).then(response => {
      playlistId = response.id;
      console.log(playlistId);

      // to handle this error later
      if (playlist.length === 0) {
        console.log('there are no songs!');
        return;
      }

      for (const song of playlist) {
        songUris += song.uri;
        songUris += ',';
      }

      populatePlaylist(accessToken, playlistId, songUris);
    });
  };

  const emptyPlaylist = () => {
    return (
      <Fragment>
        <h2 className='create-empty'>There's nothing here.</h2>
        <h3 className='create-empty'>
          Start by adding some of your favorite tracks.
        </h3>
      </Fragment>
    );
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
      <div className='create__container'>
        {playlist.length === 0 && emptyPlaylist()}
        {playlist.length > 0 && (
          <Fragment>
            <Tracklist
              tracklist={playlist}
              onClick={removeFromPlaylist}
              remove={true}
            />
            <div className='create__button-container'>
              <button className='btn create__button' onClick={clearPlaylist}>
                Clear playlist
                <i className='fa fa-trash'></i>
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Play;
