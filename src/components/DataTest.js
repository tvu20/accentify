import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTrends, fetchRecs } from '../store/trend-actions';

const DataTest = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const topTracks = useSelector(state => state.tracks.top_tracks);
  // const topArtists = useSelector(state => state.tracks.top_artists);
  // const trends = useSelector(state => state.trends);

  useEffect(() => {
    dispatch(fetchTrends(accessToken, topTracks));
    dispatch(fetchRecs(accessToken, topTracks));
  }, [dispatch, accessToken, topTracks, fetchRecs]);

  // const fetchRecs = useCallback(async () => {
  //   const response = await fetch(
  //     `https://api.spotify.com/v1/recommendations?seed_tracks=3xKsf9qdS1CyvXSMEid6g8%2C73kadnv7SduzhApfRUv5C0%2C0pIM7qcu5cOjqwFEFqbVn1%2C0hNOP5epEjX8Zj5aSGr6JU%2C2nMeu6UenVvwUktBCpLMK9,`,
  //     {
  //       headers: {
  //         Authorization: 'Bearer ' + accessToken,
  //       },
  //     }
  //   );
  //   if (!response.ok) {
  //     throw new Error('Fetching cart data failed.');
  //   }
  //   const data = await response.json();
  //   return data;
  // }, []);

  // const testing = useCallback(async () => {
  //   const result = await fetchRecs();
  //   console.log('result: ', result);
  // }, []);

  // useEffect(() => {
  //   testing();
  // }, []);

  return <div>DATA TESTING</div>;
};

export default DataTest;
