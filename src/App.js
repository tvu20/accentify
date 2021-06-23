import './App.css';

import { Route, Switch, Redirect } from 'react-router';

import Callback from './pages/Callback';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/login' />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/callback'>
          <Callback />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
      {/* <Login /> */}
      {/* <AuthTesting /> */}
    </div>
  );
}

export default App;
