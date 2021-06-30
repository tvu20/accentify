const TrackItem = props => {
  const { track, onClick } = props;

  const onClickHandler = () => {
    onClick(track);
  };

  return (
    <div className='track-item' onClick={onClickHandler}>
      <h3>{track.name}</h3>
      <p>{track.artists[0].name}</p>
    </div>
  );
};

export default TrackItem;
