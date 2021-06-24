import './App.css';

import { Route, Switch, Redirect } from 'react-router';

import Callback from './pages/Callback';
import Home from './pages/Home';
import Login from './pages/Login';
import Tracks from './pages/Tracks';
import Artists from './pages/Artists';
import Recents from './pages/Recents';
import Trends from './pages/Trends';
import CreatePlay from './pages/CreatePlay';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/login' />
        </Route>
        <Route path='/login' component={Login} />
        <Route path='/callback' component={Callback} />
        <Route path='/home' component={Home} />
        <Route path='/tracks' component={Tracks} />
        <Route path='/artists' component={Artists} />
        <Route path='/recently-played' component={Recents} />
        <Route path='/trends' component={Trends} />
        <Route path='/create' component={CreatePlay} />
      </Switch>
    </div>
  );
}

export default App;
