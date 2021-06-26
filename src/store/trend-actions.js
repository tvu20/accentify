import { trendActions } from './trends';

// to make into global constant
import NUM_FETCHED from '../constants/num-fetched';

// need to receive access token and top tracks as parameters
export const fetchTrends = (accessToken, topTracks) => {
  return async dispatch => {
    const fetchData = async id => {
      const response = await fetch(
        `https://api.spotify.com/v1/audio-features/${id}`,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Fetching data failed.');
      }

      const data = await response.json();
      return data;
    };

    const fetchingTracks = async () => {
      let dataFetched = [];
      for (const track of topTracks) {
        const trackData = await fetchData(track.id);
        dataFetched.push(trackData);
      }

      return dataFetched;
    };

    try {
      let audioTrends = {
        acousticness: 0,
        danceability: 0,
        energy: 0,
        duration: 0,
        speechiness: 0,
        tempo: 0,
        valence: 0,
      };

      const dataFetched = await fetchingTracks();

      for (const track of dataFetched) {
        audioTrends.acousticness += track.acousticness;
        audioTrends.danceability += track.danceability;
        audioTrends.energy += track.energy;
        audioTrends.duration += track.duration_ms;
        audioTrends.speechiness += track.speechiness;
        audioTrends.tempo += track.tempo;
        audioTrends.valence += track.valence;
      }

      dispatch(
        trendActions.setTrends({
          acousticness: audioTrends.acousticness / NUM_FETCHED,
          danceability: audioTrends.danceability / NUM_FETCHED,
          energy: audioTrends.energy / NUM_FETCHED,
          duration: audioTrends.duration / NUM_FETCHED,
          speechiness: audioTrends.speechiness / NUM_FETCHED,
          tempo: audioTrends.tempo / NUM_FETCHED,
          valence: audioTrends.valence / NUM_FETCHED,
        })
      );
    } catch {
      console.log('Error occured while fetching audio analysis data.');
    }
  };
};

// need to receive access token and top tracks as parameters
export const fetchRecs = (accessToken, topTracks) => {
  return async dispatch => {
    const fetchData = async cur => {
      const response = await fetch(
        `https://api.spotify.com/v1/recommendations?limit=5&seed_tracks=${
          topTracks[cur].id
        }%2C${topTracks[cur + 1].id}%2C${topTracks[cur + 2].id}%2C${
          topTracks[cur + 3].id
        }%2C${topTracks[cur + 2].id}`,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Fetching data failed.');
      }

      const data = await response.json();
      return data;
    };

    const fetchingTracks = async () => {
      let dataFetched = [];

      let i = 0;

      // 20 will be replaced.
      while (i < 20) {
        const fetched = await fetchData(i);
        for (const track of fetched.tracks) {
          dataFetched.push(track.id);
        }
        i += 5;
      }

      return dataFetched;
    };

    try {
      const recs = await fetchingTracks();
      dispatch(trendActions.setRecList({ rec_list: recs }));
    } catch {
      console.log('Error occured while fetching song recommendations.');
    }
  };
};
