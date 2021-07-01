import { useSelector } from 'react-redux';

import Header from '../components/UI/Header';
import ArtistList from '../components/Artists/ArtistList';

const DESC =
  'A collection of the musicians you have listened to the most over the last few months, or your favorite artists and singers of all time.';

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
    <div className='page'>
      <Header
        title='Top Artists'
        image='artists'
        description={DESC}
        showTimes={true}
        showButton={false}
      />
      <ArtistList artistList={topArtists} />
    </div>
  );
};

export default Artists;
