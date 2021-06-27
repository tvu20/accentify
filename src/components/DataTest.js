import { useSelector } from 'react-redux';

const DataTest = () => {
  const trends = useSelector(state => state.trends);

  const renderRecs = () => {
    return (
      <ul>
        {trends.rec_list.map(track => {
          return <li key={track.id}>{track.name}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <h1>TESTING DATA</h1>
      {renderRecs()}
    </div>
  );
};

export default DataTest;
