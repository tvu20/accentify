import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <Link to='/home'>Home page</Link>
      <Link to='/trends'>Trends page</Link>
      <Link to='/create'>Create page</Link>
    </div>
  );
};

export default Navigation;
