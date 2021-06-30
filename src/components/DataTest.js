import { useSelector, useDispatch } from 'react-redux';

import Tracklist from './Track/Tracklist';

import { playlistActions } from '../store/playlist';

const DataTest = () => {
  const dispatch = useDispatch();
  const trends = useSelector(state => state.trends);

  const addToPlaylist = track => {
    dispatch(playlistActions.addTrack(track));
  };

  // const renderRecs = () => {
  //   return (
  //     <ul>
  //       {trends.rec_list.map((track, index) => {
  //         return <li key={index}>{track.name}</li>;
  //       })}
  //     </ul>
  //   );
  // };

  const addAllToPlaylist = () => {
    for (const song of trends.rec_list) {
      dispatch(playlistActions.addTrack(song));
    }
  };

  return (
    <div>
      <h1>TESTING DATA</h1>
      <Tracklist tracklist={trends.rec_list} onClick={addToPlaylist} />
      {/* {renderRecs()} */}
      <button onClick={addAllToPlaylist}>Add all to playlist</button>
    </div>
  );
};

export default DataTest;
