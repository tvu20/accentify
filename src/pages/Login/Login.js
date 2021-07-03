// SCOPES NEEDED:
// recents page: user-read-recently-played
// tracks and artists pages: user-top-read
// create page: playlist-modify-public

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import './login.css';

const SHOW_DIALOGUE = false;

const currentLocation = window.location.href.split('/login')[0];

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1dde19b907bc4473ae8174c711753368&response_type=token&redirect_uri=${currentLocation}/callback&scope=user-read-recently-played&20user-top-read&20playlist-modify-public${
  SHOW_DIALOGUE ? '&show_dialog=true' : ''
}`;

const Login = () => {
  const history = useHistory();
  if (localStorage.getItem('isLoggedIn')) {
    history.replace('/top-tracks');
  }

  console.log(currentLocation);

  const loginHandler = () => {
    window.location.href = AUTH_URL;
  };

  return (
    <div className='login__container fullcover'>
      <div className='login__header-text'>
        <h1 className='login'>Accentify</h1>
        <h2 className='login'>A new Spotify experience, tuned just for you.</h2>
        <button className='btn login__btn' onClick={loginHandler}>
          Log in with Spotify
          <i className='fa fa-spotify login'></i>
        </button>
        <p className='login__account'>
          No Spotify account?{' '}
          <a href='https://www.spotify.com/us/signup/'>Click here.</a>
        </p>
      </div>
      <footer className='login__footer'>
        <a href='https://github.com/tvu20/accentify'>
          <i className='fa fa-github login'></i>
        </a>
        <Link to='/about' className='login__about-link'>
          What is Accentify?
        </Link>
      </footer>
    </div>
  );
};

export default Login;
