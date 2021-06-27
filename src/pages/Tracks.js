import { useSelector } from 'react-redux';

const Tracks = () => {
  const topTracks = useSelector(state => state.tracks.top_tracks);

  const renderTracks = () => {
    return (
      <ul>
        {topTracks.map(track => {
          return <li key={track.id}>{track.name}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <h1>TRACKS</h1>
      {renderTracks()}
    </div>
  );
};

export default Tracks;
