import './artists.css';

const ArtistItem = props => {
  const { artist } = props;

  const onClickHandler = () => {
    window.open(artist.external_urls.spotify, '_blank');
    // window.location.href = artist.external_urls.spotify;
  };

  return (
    <div className='artist-item' onClick={onClickHandler}>
      <img
        className='artist-item__image'
        src={artist.images[0].url}
        alt={artist.name}
      />
      <section className='artist-item__meta'>
        <h3>{artist.name}</h3>
        <p>{artist.type}</p>
      </section>
    </div>
  );
};

export default ArtistItem;
