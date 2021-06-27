import { useSelector } from 'react-redux';

const Artists = () => {
  const topArtists = useSelector(state => state.tracks.top_artists);

  const renderArtists = () => {
    return (
      <ul>
        {topArtists.map(artist => {
          return <li key={artist.id}>{artist.name}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <h1>ARTISTS</h1>
      {renderArtists()}
    </div>
  );
};

export default Artists;
