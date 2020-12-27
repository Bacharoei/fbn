import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import img from '../../img/discountLogo.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated) { 
   return <Redirect to='/dash' />
  }
    return (
        <section className="landing">
          
        <div className="dark-overlay">
          <div className="landing-inner">
          <img className="logo-img" src={img} alt="/" />
            <h1 className="x-large ">
            <i className="fas fa-laptop-code text-primary" alt=""></i> IDB Developers Portal
              </h1>
            <p className="lead">
              weolcome to IDB Developrs Portal 
            </p>
            <p className="lead">
            share posts and get help from other developers
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
              <Link to="/login" className="btn btn-light">Login</Link>
            </div>
          </div>
        </div>
      </section>
    )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}  


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing)
