const ArtistItem = props => {
  const { artist, onClick } = props;

  //   const onClickHandler = () => {
  //     onClick(artist);
  //   };

  return (
    <div className='track-item'>
      <h3>{artist.name}</h3>
      {/* will add an image */}
    </div>
  );
};

export default ArtistItem;
