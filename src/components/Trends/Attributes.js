import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import AttributeItem from './AttributeItem';
import './attributes.css';

import ATTRIBUTE_DESC from './attribute-desc';

const Attributes = () => {
  const trends = useSelector(state => state.trends);

  return (
    <Fragment>
      <h2 className='attribute__title'>Tunable Track Attributes</h2>
      <div className='attribute__container'>
        <AttributeItem
          name='Danceability'
          desc={ATTRIBUTE_DESC.danceability}
          value={trends.danceability.toFixed(2)}
        />
        <AttributeItem
          name='Accousticness'
          desc={ATTRIBUTE_DESC.acousticness}
          value={trends.acousticness.toFixed(2)}
        />
        <AttributeItem
          name='Energy'
          desc={ATTRIBUTE_DESC.energy}
          value={trends.energy.toFixed(2)}
        />
        <AttributeItem
          name='Speechiness'
          desc={ATTRIBUTE_DESC.speechiness}
          value={trends.speechiness.toFixed(2)}
        />
        <AttributeItem
          name='Tempo'
          desc={ATTRIBUTE_DESC.tempo}
          value={Math.round(trends.tempo)}
        />
        <AttributeItem
          name='Valence'
          desc={ATTRIBUTE_DESC.valence}
          value={trends.valence.toFixed(2)}
        />
      </div>
      ;
    </Fragment>
  );
};

export default Attributes;
