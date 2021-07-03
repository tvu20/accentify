import './artists.css';
import icons from '../../assets/icons';

const ArtistItem = props => {
  const { artist } = props;

  const onClickHandler = () => {
    window.open(artist.external_urls.spotify, '_blank');
    // window.location.href = artist.external_urls.spotify;
  };

  const loadImage = () => {
    if (artist.images.length !== 0) {
      return artist.images[0].url;
    }
    return icons.blank;
  };

  return (
    <div className='artist-item' onClick={onClickHandler}>
      <img className='artist-item__image' src={loadImage()} alt={artist.name} />
      <section className='artist-item__meta'>
        <h3>{artist.name}</h3>
        <p>{artist.type}</p>
      </section>
    </div>
  );
};

export default ArtistItem;
