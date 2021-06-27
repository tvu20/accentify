import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { authActions } from '../store/auth';
import { fetchUserId } from '../store/auth-actions';

const Callback = () => {
  const dispatch = useDispatch();
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
    dispatch(authActions.setAccessToken(accessToken));
    dispatch(authActions.setIsLoggedIn());
    dispatch(fetchUserId(accessToken));

    console.log('login success');

    history.replace('/top-tracks');
  };

  handleAccess();

  return <div></div>;
};

export default Callback;
