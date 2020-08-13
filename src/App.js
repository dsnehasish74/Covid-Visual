import React,{useState,useEffect} from 'react';
import Home from "./home";
import IconLabelTabs from './components/nav.js'

function App() {
    return (
    <div>
      <IconLabelTabs/>
      <Home/>
    </div>
  );
}

export default App;
