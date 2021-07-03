import './loading-spinner.css';

const LoadingSpinner = () => {
  return (
    <div className='spinner'>
      <div className='spinner-item'></div>
      <div className='spinner-item'></div>
      <div className='spinner-item'></div>
      <div className='spinner-item'></div>
      <div className='spinner-item'></div>
    </div>
  );
};

export default LoadingSpinner;
