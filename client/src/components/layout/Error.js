
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import img from '../../img/logoidb.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const Error = ({  logout, auth: { isAuthenticated, loading}, profile: { _id} }) => {

    const authLinks = (
        <Link to={`/dashboard`} className="btn btn-link">
        {" "}
        Back to Home{" "}
      </Link>
      );
    
      const guestLinks = (
        <Link to="/" className="btn btn-link">
        {" "}
        Back to Home{" "}
      </Link>

      );


  return (
    <div className="page-wrap d-flex flex-row align-items-center container ">
      <div className="container mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-12 text-center ">
          <img className="logo-img" src={img} alt="/" />

            <h1 >404</h1>
            <div className="mb-4 mt-4 lead">
              The Page you are looking for was not found.
            </div>
            {
                 !loading && (<Fragment> { isAuthenticated ? authLinks : guestLinks } </Fragment>)
            }

          </div>
        </div>
      </div>
    </div>
  );
};


Error.propTypes = { 
    logout: PropTypes.func.isRequired,
    auth: PropTypes.bool.isRequired,
    profile:PropTypes.bool.isRequired,
  }
  
  const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
  });
  
  
  export default connect(mapStateToProps, { logout })(Error);


