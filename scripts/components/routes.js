import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';
import { ReactRouter, Router, Route, History } from 'react-router';



var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

export default routes;
