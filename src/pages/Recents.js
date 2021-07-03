import { useSelector, useDispatch } from 'react-redux';

import Tracklist from '../components/Track/Tracklist';

import Header from '../components/UI/Header';

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
    <div className='page'>
      {/* <h1>RECENTS</h1> */}
      <Header
        title='Recently Played'
        image='recents'
        description=''
        showTimes={false}
        showButton={true}
        onButtonClick={addAllToPlaylist}
        buttonText='Add all to playlist'
      />

      <Tracklist
        tracklist={recents}
        onClick={addToPlaylist}
        recent={true}
        actionButton={addAllToPlaylist}
      />
    </div>
  );
};

export default Recents;
