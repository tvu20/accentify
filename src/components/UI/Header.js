import { useState } from 'react';

import banners from '../../assets/banners';

import './header.css';

const Header = props => {
  const [timePeriod, setTimePeriod] = useState(0);

  const timePeriodHandler = (event, id) => {
    props.setTime(id);
    setTimePeriod(id);
  };

  const imageUrl = () => {
    if (props.image === 'tracks') {
      return banners.tracks;
    } else if (props.image === 'recents') {
      return banners.recents;
    } else if (props.image === 'artists') {
      return banners.artists;
    } else if (props.image === 'trends') {
      return banners.trends;
    } else return banners.create;
  };

  const opacity = () => {
    if (
      props.image === 'tracks' ||
      props.image === 'trends' ||
      props.image === 'create'
    ) {
      return 1;
    } else return 0.9;
  };

  return (
    <header
      className='header'
      style={{
        backgroundImage: `linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.1),
            rgba(24, 24, 26, ${opacity()})
          ), url(${imageUrl()})`,
      }}
    >
      <div className='header-one'>
        <div className='header-one__left'>
          <h1 className='header__title'>{props.title}</h1>
          {props.description != '' && (
            <p className='header__desc'>{props.description}</p>
          )}
        </div>
        <div className='header-one__right'>
          {props.showButton && (
            <button onClick={props.onButtonClick} className='btn'>
              {props.buttonText}
            </button>
          )}
        </div>
      </div>
      {props.showTimes && (
        <div className='header__select-container'>
          <div
            onClick={e => timePeriodHandler(e, 0)}
            className={`header__selector ${timePeriod === 0 ? 'active' : ''}`}
          >
            ALL TIME
          </div>
          <div
            onClick={e => timePeriodHandler(e, 1)}
            className={`header__selector ${timePeriod === 1 ? 'active' : ''}`}
          >
            LAST SIX MONTHS
          </div>
          <div
            onClick={e => timePeriodHandler(e, 2)}
            className={`header__selector ${timePeriod === 2 ? 'active' : ''}`}
          >
            LAST MONTH
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
