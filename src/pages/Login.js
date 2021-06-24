const SHOW_DIALOGUE = false;

// SCOPES NEEDED:
// recents page: user-read-recently-played
// tracks and artists pages: user-top-read
// create page: playlist-modify-public

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1dde19b907bc4473ae8174c711753368&response_type=token&redirect_uri=http://localhost:3000/callback&scope=user-read-recently-played&20user-top-read&20playlist-modify-public${
  SHOW_DIALOGUE ? '&show_dialog=true' : ''
}`;

const Login = () => {
  const loginHandler = () => {
    window.location.href = AUTH_URL;
  };
  return <button onClick={loginHandler}>Log In</button>;
};

export default Login;
