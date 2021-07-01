import icons from '../../assets/icons';

import './nav.css';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='nav__container'>
      {/* <Link to='/home'>Home page</Link> */}
      <Link className='nav__icon nav__tracks' to='/top-tracks'>
        <img src={icons.tracks} alt='top tracks' />
      </Link>
      <Link className='nav__icon nav__artists' to='/top-artists'>
        <img src={icons.artists} alt='top artists' />
      </Link>
      <Link className='nav__icon nav__recent' to='/recently-played'>
        <img src={icons.recent} alt='recently played' />
      </Link>
      <Link className='nav__icon nav__trends' to='/trends'>
        <img src={icons.trends} alt='trends' />
      </Link>
      <Link className='nav__icon nav__create' to='/create'>
        <img src={icons.create} alt='create' />
      </Link>
    </div>
  );
};

export default Navigation;
