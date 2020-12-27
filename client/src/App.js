import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import ErrorPage from "./components/layout/Error";
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-form/CreateProfile';
import CreateExperience from './components/profile-form/CreateExperience';



//Redux 
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import EditProfile from './components/profile-form/EditProfile';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import AddExperience from './components/profile-form/AddExperience';
import AddDepartment from './components/profile-form/AddDepartment';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';



if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => { 
  useEffect(() => {
    store.dispatch(loadUser());

  }, []);

  return( 
<Provider store={store}>
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section  className="container">
        <Alert />
        <Switch>
          <Route  path="/login" component={Login} />
          <Route  path="/register" component={Register} />
          <Route  path="/Profiles" component={Profiles} />
          <PrivateRoute  path="/profile/:id" component={Profile} />
          <PrivateRoute  path="/Dashboard" component={Dashboard} />
          <PrivateRoute  path="/create-profile" component={CreateProfile} />
          <PrivateRoute  path="/edit-profile" component={EditProfile} />
          <PrivateRoute  path="/add-experience" component={CreateExperience} />
          <PrivateRoute  path="/addExp" component={AddExperience} />
          <PrivateRoute  path="/addDep" component={AddDepartment} />
          <PrivateRoute exact path="/posts" component={Posts} />
          <PrivateRoute exact path="/posts/:id" component={Post} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </section>
    </Fragment>
  </Router>
</Provider>
)};


export default App;
