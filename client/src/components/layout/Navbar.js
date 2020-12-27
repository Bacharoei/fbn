import React, { Fragment } from 'react';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { getProfile } from '../../actions/profile';



const Navbar = ({ logout, auth: { isAuthenticated, loading }, match  }) => {


  const authLinks = (
    <ul>

      <li><Link  to="/posts">Posts</Link></li>
      <li>
        <Link to={`/profile/`}>
          <i className="fas fa-user"></i>{' '}
          <span className="hide-sm">Profile</span></Link>
      </li>
      <li>
        <Link to={`/dashboard`}>
          <i className="fas fa-user"></i>{' '}
          <span className="hide-sm">Dashboard</span></Link>
      </li>
      <li>
        <Link to="/profiles">
          <i className="fas fa-users"></i>{' '}
          <span className="hide-sm">Developres</span></Link>
      </li>
      <li>
        <Link onClick={logout} to="/">
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className="hide-sm">Logout</span></Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
        <li>
          <Link to="/profiles">
            <i className="fas fa-users"></i>{' '}
            <span className="hide-sm">Developres</span></Link>
       </li>
       <li>
          <Link to="/login">
            <i className="fas fa-sign-out-alt"></i>{' '}
            <span className="hide-sm">Login</span></Link>
       </li>
       <li>
          <Link to="/register">
            <i className="fas fa-key"></i>{' '}
            <span className="hide-sm">Register</span></Link>
       </li>
      

    </ul>

  );


    return (
<nav className="navbar bg-dark">
  
      <h2>
        <Link to="/dashboard">
          <i className="fas fa-laptop-code" /> IDB Dev Portal 
        </Link>
      </h2>
      {
        !loading && (<Fragment> { isAuthenticated ? authLinks : guestLinks } </Fragment>)
      }

    </nav>
    )
}

Navbar.propTypes = { 
  logout: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});


export default connect(mapStateToProps, { getProfile, logout })(Navbar);