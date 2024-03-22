import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  Redirect,
  HashRouter
} from 'react-router-dom';
import './style.css';
import Home from './views/home';
import NotFound from './views/not-found';

const App = () => {
  return (
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
  );
};

ReactDOM.render(<React.StrictMode><HashRouter><App /></HashRouter></React.StrictMode>, document.getElementById('app'));
