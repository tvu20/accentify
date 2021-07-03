import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import icons from '../../assets/icons';

import './nav.css';

import { useHistory } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  const history = useHistory();
  const [badgeHighlighted, setBadgeHighlight] = useState(false);

  const numSongs = useSelector(state => state.playlist.count);

  const badgeClasses = `badge ${badgeHighlighted ? 'bump' : ''}`;

  const sendToCreate = () => {
    history.push('/create');
  };

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
        <NavLink
          className='nav__icon nav__tracks'
          to='/top-tracks'
          activeClassName='nav__active'
        >
          <img src={icons.tracks} alt='top tracks' />
        </NavLink>
        <NavLink
          className='nav__icon nav__artists'
          to='/top-artists'
          activeClassName='nav__active'
        >
          <img src={icons.artists} alt='top artists' />
        </NavLink>
        <NavLink
          className='nav__icon nav__recent'
          to='/recently-played'
          activeClassName='nav__active'
        >
          <img src={icons.recent} alt='recently played' />
        </NavLink>
        <NavLink
          className='nav__icon nav__trends'
          to='/trends'
          activeClassName='nav__active'
        >
          <img src={icons.trends} alt='trends' />
        </NavLink>
        <NavLink
          className='nav__icon nav__create'
          to='/create'
          activeClassName='nav__active'
        >
          <img src={icons.create} alt='create' />
        </NavLink>
        {numSongs > 0 && (
          <div className={badgeClasses} onClick={sendToCreate}>
            {numSongs > 99 ? '99+' : numSongs}
          </div>
        )}
        {/* <Link className='nav__icon nav__create' to='/create'>
        {renderBadge()}
        <img src={icons.create} alt='create' />
      </Link> */}
      </div>
      <Link className='nav__icon nav__logo' to='/banner'>
        <img src={icons.logo} alt='logo' />
      </Link>
    </div>
  );
};

export default Navigation;
