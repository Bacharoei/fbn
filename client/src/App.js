import React from 'react';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import dashboard from './components/layout/dashboard';


const App = () => 

<Router>
    <>
    <Navbar />
    <Route exact path="/" component={Landing} />
    <section className="container">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="dashboard" component={dashboard} />
      </Switch>
    </section>
  </>
</Router>



export default App;
