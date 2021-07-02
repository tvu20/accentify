import { useSelector, useDispatch } from 'react-redux';

import Tracklist from './Track/Tracklist';

import { playlistActions } from '../store/playlist';

const Recommendations = props => {
  const dispatch = useDispatch();
  const trends = useSelector(state => state.trends);

  const addToPlaylist = track => {
    dispatch(playlistActions.addTrack(track));
  };

  const addAllToPlaylist = () => {
    for (const song of trends.rec_list) {
      dispatch(playlistActions.addTrack(song));
    }
  };

  return (
    <div>
      <div className='attribute-recs__header'>
        <h2 className='attribute__title'>Recommendations</h2>
        <button className='btn' onClick={addAllToPlaylist}>
          Add all to playlist
        </button>
      </div>
      <Tracklist tracklist={trends.rec_list} onClick={addToPlaylist} />
      {/* <button className='btn' onClick={props.refresh}>
        Refresh recommendations
      </button> */}
    </div>
  );
};

export default Recommendations;
