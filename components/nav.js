import * as React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, Link, LinkProps } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

import Tabs from '@material-ui/core/Tabs';
import { default as Tab, TabProps } from '@material-ui/core/Tab';

import Home from '../home';
import FinalGlobe from '../FinalGlobe'




 

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = ( ChangeEvent, newValue) => {
    setValue(newValue);
  };
  return (
    <div >
      <AppBar position="static" color="default" >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label='Home'  component={Link} to="/home" />
          <Tab label='Dashboard'  component={Link} to="/FinalGlobe" />
          <Tab label='Aboutus'  component={Link} to="" />
        </Tabs>
      </AppBar>
    </div>
  )
};

export default function IconLabelTabs() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route  path="/home" component={ Home } />
          <Route exact path="/FinalGlobe" component={ FinalGlobe } />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </Router>
  )
}
