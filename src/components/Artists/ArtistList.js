import ArtistItem from './ArtistItem';

import '../Track/tracks.css';

const ArtistList = props => {
  const { artistList, onClick } = props;

  const renderArtists = () => {
    return artistList.map(artist => {
      return <ArtistItem key={artist.id} artist={artist} onClick={onClick} />;
    });
  };

  return <div className='artist__container'>{renderArtists()}</div>;
};

export default ArtistList;
