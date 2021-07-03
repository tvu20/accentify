import { Fragment } from 'react';
import TrackItem from './TrackItem';
import LoadingSpinner from '../UI/LoadingSpinner';

import './tracks.css';

const Tracklist = props => {
  const { tracklist, onClick, recent, remove, actionButton } = props;

  const renderTracks = () => {
    if (recent) {
      return tracklist.map((track, index) => {
        return <TrackItem key={index} track={track.track} onClick={onClick} />;
      });
    } else if (remove) {
      return tracklist.map((track, index) => {
        return (
          <TrackItem
            key={index}
            track={track}
            onClick={onClick}
            remove={true}
          />
        );
      });
    } else {
      return tracklist.map((track, index) => {
        return <TrackItem key={index} track={track} onClick={onClick} />;
      });
    }
  };

  return (
    <Fragment>
      {tracklist.length === 0 && (
        <div className='tracks__container-empty'>
          <LoadingSpinner />
        </div>
      )}
      {tracklist.length > 0 && (
        <div className='tracks__container'>{renderTracks()}</div>
      )}
      <button className='btn tracks__btn-mobile' onClick={actionButton}>
        {props.actionButtonText ? 'Create Playlist ' : 'Add all to Playlist'}
      </button>
    </Fragment>
  );
};

export default Tracklist;
