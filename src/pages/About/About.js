import { useHistory } from 'react-router-dom';

import './about.css';

const About = () => {
  const history = useHistory();

  const returnHandler = () => {
    history.goBack();
  };

  return (
    <div className='about__container fullpage'>
      <h1 className='about'>Accentify</h1>
      <div className='about__text'>
        <p>
          Accentify is an open-source web application developed using the
          Spotify Web API. It can be used to view your most-listened tracks on
          Spotify and your favorite artists, as well as metadata about your
          listening preferences and a curated recommendations list.{' '}
        </p>
        <h5 className='about'>Why do you require my Spotify account?</h5>
        <p>
          Accentify requires access to your Spotify account in order to access
          information about your top tracks, as well as for authorization to
          create a playlist within your Spotify account. None of your personal
          Spotify information is stored within our application or in any server,
          and we don’t save any of your listening data.
        </p>
        <h5 className='about'>What permissions do you use?</h5>
        <p>
          After receiving access to your Spotify account, Accentify will
          retrieve data about your top tracks, artists, and most recently played
          songs. Accentify will also be granted the permission to create
          playlists within your Spotify account.
        </p>
      </div>
      <div className='about__return-button'>
        <button class='btn ' onClick={returnHandler}>
          Return
        </button>
      </div>
    </div>
  );
};

export default About;
