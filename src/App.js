import './App.css';

import { Route, Switch, Redirect } from 'react-router';

import About from './pages/About/About';
import Callback from './pages/Callback';
import Login from './pages/Login/Login';
import Tracks from './pages/Tracks';
import Artists from './pages/Artists';
import Recents from './pages/Recents';
import Trends from './pages/Trends';
import CreatePlay from './pages/Create/CreatePlay';
import Banner from './pages/Login/Banner';

import DataFetcher from './components/DataFetcher';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          {localStorage.getItem('isLoggedIn') ? (
            <Redirect to='/top-tracks' />
          ) : (
            <Redirect to='/login' />
          )}
        </Route>

        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />

        <Route path='/callback' component={Callback} />
        <DataFetcher>
          <Route path='/top-tracks' component={Tracks} />
          <Route path='/top-artists' component={Artists} />
          <Route path='/recently-played' component={Recents} />
          <Route path='/trends' component={Trends} />
          <Route path='/create' component={CreatePlay} />
          <Route path='/banner' component={Banner} />
        </DataFetcher>
      </Switch>
    </div>
  );
}

export default App;
