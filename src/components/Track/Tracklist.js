import TrackItem from './TrackItem';
import TrackRecentItem from './TrackRecentItem';

import './tracks.css';

const Tracklist = props => {
  const { tracklist, onClick, recent } = props;

  const renderTracks = () => {
    if (recent) {
      return tracklist.map((track, index) => {
        return <TrackRecentItem key={index} track={track} onClick={onClick} />;
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
