import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import store from './store'
import Root from './components/root'
import DisplayCandy from './components/DisplayCandy';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Root} />
        <Route path='/candy' component={DisplayCandy} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('main')
)
