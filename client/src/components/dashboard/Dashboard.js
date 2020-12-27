import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardAction from './DashboardAction';
import { deleteAccount, getUserProfile } from '../../actions/profile';
import DashboardSetup from './DashboardSetup';
import Experience from './Experience';
import Department from './Department';

const Dashboard = ({ 
    getUserProfile,
    auth: { user },
    profile: { profile, loading }, 
    deleteAccount
    }) => {

    
    useEffect(() => {
        getUserProfile()        
     }, [ getUserProfile ]);


    return loading && profile === null ? <Spinner /> : ( 
    <Fragment>
        <h1 className="large text-primary"> Dashboard </h1>
        <p className="lead">
            <i className="fas fa-user" /> Welcome {user && user.name}
           
        </p>
   
        { 
        profile !== null || loading ? ( 
            <Fragment>
                <DashboardAction />     
                <Experience experience={profile.experience} />
                <Department education={profile.education} />
                <div className="my-2">
                    <button className="btn btn-danger" onClick={e => deleteAccount()}>
                        <i className="fas fa-user-minus"></i> Delete My Account
                    </button>
                </div>
         </Fragment>
        ) : ( 
            <Fragment> 
                <DashboardSetup /> 
        </Fragment> 

        ) 
    }
    </Fragment>
     );
};

Dashboard.propTypes = {
    getUserProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,

}

  const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
  });
  

export default connect(
    mapStateToProps,
    {getUserProfile, deleteAccount} )(Dashboard)

