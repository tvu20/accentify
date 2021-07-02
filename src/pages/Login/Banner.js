import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='page'>
      <div className='login__container fullcover'>
        <div className='login__header-text'>
          <h1 className='login'>Accentify</h1>
          <h2 className='login'>
            A new Spotify experience, tuned just for you.
          </h2>
        </div>
        <footer className='login__footer'>
          <a href='https://github.com/tvu20/accentify'>
            <i className='fa fa-github login'></i>
          </a>
          <Link to='/about' className='login__about-link'>
            What is Accentify?
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default Banner;
