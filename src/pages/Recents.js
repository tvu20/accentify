import { useSelector } from 'react-redux';

const Recents = () => {
  const recents = useSelector(state => state.tracks.recently_played);

  const renderTracks = () => {
    return (
      <ul>
        {recents.map((song, index) => {
          return <li key={index}>{song.track.name}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <h1>RECENTS</h1>
      {renderTracks()}
    </div>
  );
};

export default Recents;
