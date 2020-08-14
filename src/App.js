import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IconLabelTabs from './components/nav.js'

import Home from './home';
import FinalGlobe from './FinalGlobe'
import About from './aboutus.js'

function App() {
    return (
    <div>
      <Router>
        <IconLabelTabs/>
          <Switch>
            <Route  exact path="/" component={ Home } />
            <Route exact path="/FinalGlobe" component={ FinalGlobe } />
            <Route exact path="/aboutus" component={ About } />
          </Switch>
      </Router>

    </div>
  );
}

export default App;
