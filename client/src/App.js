import React from 'react';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => 

<Router>
    <>
    <Navbar />
    <Landing />
  


  </>
</Router>



export default App;
