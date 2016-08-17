import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Routes
import App from './components/app/App';
import CardExample from './components/examples/CardExample';
import Login from './components/examples/Login';

const routes = (
  <Route path="/" component={ App }>
    <Route path="/login" component={ Login } />
    <Route path="/card" component={ CardExample } />
    <IndexRoute component={ Login } />
  </Route>
);

ReactDOM.render(
  <Router
    routes={ routes }
    history={ browserHistory } />,
  document.getElementById('root')
);
