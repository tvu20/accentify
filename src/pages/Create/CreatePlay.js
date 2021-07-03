import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CreatedModal from './CreatedModal';
import Header from '../../components/UI/Header';
import Tracklist from '../../components/Track/Tracklist';

import { playlistActions } from '../../store/playlist';
import { createPlaylist, populatePlaylist } from '../../store/playlist-actions';

import './create.css';

const DESC =
  'See your collection of saved songs, whether brand new or beloved tracks, and create a playlist to send to your Spotify account for your listening pleasure.';

const Play = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [playlistData, setPlaylistData] = useState();

  const accessToken = useSelector(state => state.auth.accessToken);
  const userId = useSelector(state => state.auth.userId);
  const playlist = useSelector(state => state.playlist.tracklist);

  const removeFromPlaylist = track => {
    dispatch(playlistActions.removeTrack(track.playlist_id));
  };

  const clearPlaylist = () => {
    dispatch(playlistActions.clearPlaylist());
  };

  const createPlaylistHandler = () => {
    let playlistId = '';
    let songUris = '';

    // to handle this error later
    if (playlist.length === 0) {
      console.log('there are no songs!');
      return;
    }

    // console.log(userId);
    createPlaylist(accessToken, userId)
      .then(response => {
        playlistId = response.id;
        console.log(playlistId);

        for (const song of playlist) {
          songUris += song.uri;
          songUris += ',';
        }

        populatePlaylist(accessToken, playlistId, songUris);
      })
      .then(() => {
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        });
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Fetching track info failed.');
        }

        return response.json();
      })
      .then(data => {
        setPlaylistData(data.external_urls.spotify);
        // console.log(data);
      });

    setShowModal(true);
    dispatch(playlistActions.clearPlaylist());
  };

  const modalToggleHandler = () => {
    setShowModal(prevState => !prevState);
    setPlaylistData(null);
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
        buttonDisable={playlist.length === 0}
        onButtonClick={createPlaylistHandler}
        buttonText='Create Playlist'
      />
      <div className='create__container'>
        {showModal && (
          <CreatedModal
            onClose={modalToggleHandler}
            playlistLink={playlistData}
          />
        )}
        {playlist.length === 0 && emptyPlaylist()}
        {playlist.length > 0 && (
          <Fragment>
            <Tracklist
              tracklist={playlist}
              onClick={removeFromPlaylist}
              remove={true}
              actionButton={createPlaylistHandler}
              actionButtonText='Create Playlist'
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
