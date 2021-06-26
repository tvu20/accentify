import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import TestContent from '../components/TestContent';

const Home = () => {
  const history = useHistory();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    history.replace('/login');
  }

  return (
    <div>
      <TestContent />
    </div>
  );
};

export default Home;
