import { useHistory } from 'react-router';

const Callback = () => {
  const history = useHistory();

  // handling token generation
  const handleAccess = () => {
    const url = window.location.href;
    const urlParts = url.split('#access_token=');

    if (urlParts.length === 1) {
      console.log('failed to login');
      return history.replace('/login');
    }

    const accessToken = urlParts[urlParts.length - 1];

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('isLoggedIn', true);

    fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Fetching user info failed.');
        }

        return response.json();
      })
      .then(data => {
        localStorage.setItem('userId', data.id);
      })
      .catch(error => {
        console.log(error);
      });

    console.log('login success');

    history.replace('/top-tracks');
  };

  handleAccess();

  return <div></div>;
};

export default Callback;
