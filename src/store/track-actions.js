import { trackActions } from './tracks';

// need to receive access token as a payload
export const fetchTrackData = accessToken => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.spotify.com/v1/me/top/tracks?time_range=long_term',
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Fetching cart data failed.');
      }

      const data = await response.json();

      return data;
    };

    try {
      const trackData = await fetchData();
      dispatch(
        trackActions.setTracks({
          items: trackData.items || [],
        })
      );
    } catch {
      console.log('Error occured.');
    }
  };
};

// need to receive access token as a payload
export const fetchArtistData = accessToken => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.spotify.com/v1/me/top/artists?time_range=long_term',
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Fetching cart data failed.');
      }

      const data = await response.json();

      return data;
    };

    try {
      const artistData = await fetchData();
      dispatch(
        trackActions.setArtists({
          items: artistData.items || [],
        })
      );
    } catch {
      console.log('Error occured.');
    }
  };
};

// need to receive access token as a payload
export const fetchRecentData = accessToken => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.spotify.com/v1/me/player/recently-played',
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Fetching cart data failed.');
      }

      const data = await response.json();

      return data;
    };

    try {
      const recentData = await fetchData();
      dispatch(
        trackActions.setRecent({
          items: recentData.items || [],
        })
      );
    } catch {
      console.log('Error occured.');
    }
  };
};
