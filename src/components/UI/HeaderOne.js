import { useState } from 'react';

import banners from '../../assets/banners';

import './header.css';

const HeaderOne = props => {
  const [timePeriod, setTimePeriod] = useState(0);

  return (
    <header
      className='header'
      style={{
        backgroundImage: `linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.1),
            rgba(24, 24, 26, 1)
          ), url(${banners.tracks})`,
      }}
    >
      <div className='header-one'>
        <div className='header-one__left'>
          <h1 className='header__title'>{props.title}</h1>
          <p className='header__desc'>{props.description}</p>
        </div>
        <div className='header-one__right'>
          <button className='btn'>Add all to playlist</button>
        </div>
      </div>
      <div className='header__select-container'>
        <div
          onClick={() => setTimePeriod(0)}
          className={`header__selector ${timePeriod === 0 ? 'active' : ''}`}
        >
          ALL TIME
        </div>
        <div
          onClick={() => setTimePeriod(1)}
          className={`header__selector ${timePeriod === 1 ? 'active' : ''}`}
        >
          LAST SIX MONTHS
        </div>
        <div
          onClick={() => setTimePeriod(2)}
          className={`header__selector ${timePeriod === 2 ? 'active' : ''}`}
        >
          LAST MONTH
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
