import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileBio = ({ 
    profile: { 
        bio, 
        skills, 
        user: {name}
    }}) => <div className="profile-about bg-light p-2">
        {
            bio && (
                <Fragment>
                    <h2 className="text-primary">{name.trim().split(' ')[0]}'s direct manager</h2>
                    <p className="lead">{bio}</p>
                </Fragment>
            )
        }
               {
            skills && (
                <Fragment>
                    <div className="line"></div>
                    <h2 className="text-primary">skill set</h2>
                    <div className="skills">
                        {skills.map((skill, index) => (
                            <div key={index} className="p-1">
                                <i className="fas fa-check"></i> {skill}
                            </div>
                        )) }
                    </div>
                </Fragment>
            )
        }
    </div>

ProfileBio.propTypes = {
    profile: PropTypes.object.isRequired,

}

export default ProfileBio
