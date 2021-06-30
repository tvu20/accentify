import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createPlaylist, populatePlaylist } from '../store/playlist-actions';

const CreatePlaylist = () => {
  const accessToken = useSelector(state => state.auth.accessToken);
  const userId = useSelector(state => state.auth.userId);
  const playlist = useSelector(state => state.playlist.tracklist);
  // const recs = useSelector(state => state.trends.rec_list);

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

  return (
    <div>
      <button onClick={createPlaylistHandler}>Create a Playlist</button>
    </div>
  );
};

export default CreatePlaylist;
