import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div style={{ marginBottom: '50px' }}>
      {/* <Link to='/home'>Home page</Link> */}
      <Link to='/trends'>Trends page</Link>
      <Link to='/create'>Create page</Link>
      <Link to='/top-artists'>Artists page</Link>
      <Link to='/top-tracks'>Tracks page</Link>
      <Link to='/recently-played'>Recently Played</Link>
    </div>
  );
};

export default Navigation;
