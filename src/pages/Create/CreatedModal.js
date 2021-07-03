import Modal from '../../components/UI/Modal';

const CreatedModal = props => {
  return (
    <Modal onClose={props.onClose}>
      <h2>Congratulations!</h2>
      <p>Your playlist has been saved to your Spotify library.</p>
      <p>Happy listening!</p>
      <button className='btn'>Open Playlist</button>
      <button className='btn'>Return</button>
    </Modal>
  );
};

export default CreatedModal;
