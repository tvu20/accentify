import icons from '../../assets/icons';

import Modal from '../../components/UI/Modal';

const CreatedModal = props => {
  const urls = props.playlistLink || '';

  const redirectHandler = () => {
    window.open(urls);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <img
        className='created-modal__img'
        src={icons.celebration}
        alt='success'
      />
      <h2 className='created-modal__title'>Congratulations!</h2>
      <p className='created-modal__text'>
        Your playlist has been saved to your Spotify library.
      </p>
      <p className='created-modal__text'>Happy listening!</p>

      <div className='created-modal__buttons'>
        <button className='btn' onClick={redirectHandler}>
          Open Playlist
        </button>
        <button className='btn btn--alt' onClick={props.onClose}>
          Return
        </button>
      </div>
    </Modal>
  );
};

export default CreatedModal;
