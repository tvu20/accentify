import { Fragment } from 'react';
import ArtistItem from './ArtistItem';

import '../Track/tracks.css';

const ArtistList = props => {
  const { artistList, onClick } = props;

  const renderArtists = () => {
    return artistList.map(artist => {
      return <ArtistItem key={artist.id} artist={artist} onClick={onClick} />;
    });
  };

  return (
    <Fragment>
      {artistList.length === 0 && <div className='tracks__container-empty' />}
      {artistList.length > 0 && (
        <div className='artist__container'>{renderArtists()}</div>
      )}
    </Fragment>
  );
};

export default ArtistList;
