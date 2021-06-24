import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Navigation from '../components/Navigation';
import TestContent from '../components/TestContent';

const Home = () => {
  const history = useHistory();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    history.replace('/login');
  }

  return (
    <div>
      <Navigation />
      <TestContent />
    </div>
  );
};

export default Home;
