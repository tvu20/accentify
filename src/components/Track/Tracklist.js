import TrackItem from './TrackItem';

import './tracks.css';

const Tracklist = props => {
  const { tracklist, onClick, recent, remove } = props;

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

  return <div className='tracks__container'>{renderTracks()}</div>;
};

export default Tracklist;
