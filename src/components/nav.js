import * as React from "react";
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs';
import { default as Tab } from '@material-ui/core/Tab';







export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = ( ChangeEvent, newValue) => {
    setValue(newValue);
  };
  return (
    <div >
      <AppBar position="static" color="default" >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label='Home'  component={Link} to="/" />
          <Tab label='Dashboard'  component={Link} to="/FinalGlobe" />
          <Tab label='Aboutus'  component={Link} to="/aboutus" />
        </Tabs>
      </AppBar>
    </div>
  )
};
