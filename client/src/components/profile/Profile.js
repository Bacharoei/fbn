import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getProfile } from '../../actions/profile'
import  { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop'
import ProfileBio from './ProfileBio'
import ProfileExp from './ProfileExp'
import ProfileDeprt from './ProfileDeprt'


const Profile = ({ 
    getProfile, 
    match, 
    profile: { profile, loading }, 
    auth 
}) => {

    useEffect(() => {
        getProfile(match.params.id)
    }, [getProfile])


    return (
        <Fragment>
            {profile === null || loading ? <Spinner /> :
             <Fragment>
                <Link to="/profiles" className="btn btn-dark">Back to profiles</Link>

                {auth.isAuthenticated && 
                    auth.loading === false  && 
                    auth.user.id === profile.user.id && (
                    <Link to="/edit-profile" className="btn btn-dark">
                        Edit Profile
                    </Link>
                )}
                <div className="profile-grid my-1 ">
                    <ProfileTop profile={profile} />
                    <ProfileBio profile={profile} />
                    <div className="profile-exp bg-white p-2">
                    <h2 className="text-primary">Experience</h2>
                        {profile.experience.length > 0 ? (<Fragment>
                            {profile.experience.map(experience => (
                                <ProfileExp key={experience._id} experience={experience} />
                            ))}

                        </Fragment>) : (<h4> No Experience</h4>)}
                    </div>
                    <div className="profile-edu bg-white p-2">
                    <h2 className="text-primary">Department</h2>
                        {profile.education.length > 0 ? (<Fragment>
                            {profile.education.map(education => (
                                <ProfileDeprt key={education._id} education={education} />
                            ))}

                        </Fragment>) : (<h4> No Experience</h4>)}
                    </div>
                  
                </div>
                 </Fragment> }
        </Fragment>
    )
}

Profile.propTypes = {
    getProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
 
    
  });

export default connect(mapStateToProps, { getProfile })(Profile)
