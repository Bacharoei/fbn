import React, { Fragment } from 'react';

import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner';

const DashboardSetup = ({ loading }) => {

    if(loading) { 
        return <Spinner />
    }

    return (
        <Fragment> 
        <p> You have not yet setup a profile, plesase add some info </p>
        <Link to="/create-profile" className='btn btn-primary my-1'>
            Create Profile
        </Link>
    </Fragment>

    )
}



export default DashboardSetup


