import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import icons from '../../assets/icons';

import './nav.css';

import { Link } from 'react-router-dom';

const Navigation = () => {
  // new
  const [badgeHighlighted, setBadgeHighlight] = useState(false);

  const numSongs = useSelector(state => state.playlist.count);

  const badgeClasses = `nav__create ${badgeHighlighted ? 'bump' : ''}`;

  useEffect(() => {
    if (numSongs === 0) {
      return;
    }
    setBadgeHighlight(true);

    const timer = setTimeout(() => {
      setBadgeHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [numSongs]);

  return (
    <div className='nav-bar'>
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
        <Link className={badgeClasses} to='/create'>
          <img src={icons.create} alt='create' />
          {numSongs > 0 && (
            <div className='badge'>{numSongs > 99 ? '99+' : numSongs}</div>
          )}
        </Link>
        {/* <Link className='nav__icon nav__create' to='/create'>
        {renderBadge()}
        <img src={icons.create} alt='create' />
      </Link> */}
      </div>
      <Link className='nav__icon' to='/banner'>
        <img src={icons.logo} alt='logo' />
      </Link>
    </div>
  );
};

export default Navigation;
