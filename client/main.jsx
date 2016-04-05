import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import HomePage from './pages/HomePage';
import SlidePage from './pages/SlidePage';

const App = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={HomePage} />
    <Route path="/slides/(:slideNumber)" component={SlidePage} />
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('render-target'));
});
