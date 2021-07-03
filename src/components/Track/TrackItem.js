import icons from '../../assets/icons';

const TrackItem = props => {
  const { track, onClick } = props;

  const imageUrl = () => {
    if (track.album.images.length !== 0) {
      return track.album.images[0].url;
    }
    return icons.blank;
  };

  const calcDuration = ms => {
    ms /= 1000;
    return [Math.floor(ms / 60), Math.floor(ms % 60)];
  };

  const onClickHandler = () => {
    window.open(track.external_urls.spotify, '_blank');
  };

  const onAddHandler = event => {
    onClick(track);
  };

  const duration = calcDuration(track.duration_ms);

  const icon = props.remove ? (
    <h4 style={{ fontSize: '25px' }}>
      <i className='fa fa-trash'></i>
    </h4>
  ) : (
    <h4 style={{ fontSize: '35px' }}>+</h4>
  );

  return (
    <div className='track-item fade-in-image'>
      <div className='track-item__left' onClick={onClickHandler}>
        <img
          className='track-item__image'
          src={imageUrl()}
          alt={track.album.name}
        />
        <section className='track-item__meta'>
          <h3>{track.name}</h3>
          <p>{track.artists[0].name}</p>
        </section>
      </div>
      <div className='track-item__right' onClick={onAddHandler}>
        <p className='track-item__time'>
          {duration[0]}:{duration[1] < 9 ? `0${duration[1]}` : duration[1]}
        </p>
        {icon}
      </div>
    </div>
  );
};

export default TrackItem;
