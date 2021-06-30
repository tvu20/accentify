import { useSelector } from 'react-redux';

import ArtistList from '../components/Artists/ArtistList';

const Artists = () => {
  const topArtists = useSelector(state => state.tracks.top_artists);

  // const renderArtists = () => {
  //   return (
  //     <ul>
  //       {topArtists.map(artist => {
  //         return <li key={artist.id}>{artist.name}</li>;
  //       })}
  //     </ul>
  //   );
  // };

  return (
    <div>
      <h1>ARTISTS</h1>
      <ArtistList artistList={topArtists} />
    </div>
  );
};

export default Artists;
