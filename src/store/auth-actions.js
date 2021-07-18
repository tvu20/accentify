import { authActions } from './auth';

// need to receive access token as a payload
export const fetchUserId = (accessToken, topTracks) => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Fetching user id failed.');
      }

      const data = await response.json();
      return data;
    };

    try {
      const user = await fetchData();
      dispatch(authActions.setUserId(user.id));
    } catch {
      console.log('Error occured while fetching user id.');
    }
  };
};
