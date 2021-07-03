import { trackActions } from './tracks';

import NUM_FETCHED from '../constants/num-fetched';

// need to receive access token as a payload
export const fetchTrackData = accessToken => {
  return async dispatch => {
    const fetchData = async timePeriod => {
      const response = await fetch(
        `https://api.spotify.com/v1/me/top/tracks?time_range=${timePeriod}&limit=${NUM_FETCHED}`,
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
      const topAll = await fetchData('long_term');
      const top6 = await fetchData('medium_term');
      const topM = await fetchData('short_term');
      dispatch(
        trackActions.setTracks({
          topAll: topAll.items || [],
          top6: top6.items || [],
          topM: topM.items || [],
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
    const fetchData = async timePeriod => {
      const response = await fetch(
        `https://api.spotify.com/v1/me/top/artists?time_range=${timePeriod}&limit=${NUM_FETCHED}`,
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
      const topAll = await fetchData('long_term');
      const top6 = await fetchData('medium_term');
      const topM = await fetchData('short_term');
      dispatch(
        trackActions.setArtists({
          topAll: topAll.items || [],
          top6: top6.items || [],
          topM: topM.items || [],
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
        `https://api.spotify.com/v1/me/player/recently-played?limit=${NUM_FETCHED}`,
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
