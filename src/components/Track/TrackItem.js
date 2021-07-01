const TrackItem = props => {
  const { track, onClick } = props;

  const calcDuration = ms => {
    ms /= 1000;
    return [Math.floor(ms / 60), Math.floor(ms % 60)];
  };

  const onClickHandler = () => {
    window.location.href = track.external_urls.spotify;
  };

  const onAddHandler = () => {
    onClick(track);
  };

  const duration = calcDuration(track.duration_ms);

  return (
    <div className='track-item' onClick={onClickHandler}>
      <div className='track-item__left'>
        <img
          className='track-item__image'
          src={track.album.images[0].url}
          alt={track.album.name}
        />
        <section className='track-item__meta'>
          <h3>{track.name}</h3>
          <p>{track.artists[0].name}</p>
        </section>
      </div>
      <div className='track-item__right'>
        <p>
          {duration[0]}:{duration[1] < 9 ? `0${duration[1]}` : duration[1]}
        </p>
        <h4 onClick={onAddHandler}>+</h4>
      </div>
    </div>
  );
};

export default TrackItem;
