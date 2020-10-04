import React from 'react';

import Landing from './pages/Landing'
import Missing from './pages/404'
import Contact from './pages/Contact'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route component={Missing} />
      </Switch>
    </Router>
  );
}

export default App;
