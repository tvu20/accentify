import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

const TestContent = () => {
  const accessToken = useSelector(state => state.auth.accessToken);

  const fetchData = useCallback(async () => {
    console.log(accessToken);
    const response = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    );

    const data = response.json();

    console.log(data);
  }, [accessToken]);

  useEffect(() => {
    console.log('home screen');

    fetchData();
  }, [fetchData]);

  return <h1>HOME SCREEN</h1>;
};

export default TestContent;
