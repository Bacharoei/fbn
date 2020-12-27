import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const ProfileTop = ({ profile: { 
    status,
    company,
    location,
    social,
    user: {name, avatar}
}}) => {
    return (
        <div className="profile-top bg-primary p-2">
            <img className="round-img" src={avatar} alt="userpro" />
            <h1 className="large">{name}</h1>     
            <p className="lead">{status} {company && <span> at {company}</span>}</p>
            <p>{location && <span>{location}</span>}</p>
            <div className="icons my-1">
                {social && social.facebook && (
                    <Link to={social.facebook} rel="noopener noreferrer">
                        <i className="fab fa-facebook fa-2x" />
                    </Link>
                )}
                {social && social.linkdin && (
                    <Link to={social.linkedin} rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-2x" />
                    </Link>
                )}
                
            </div>
        </div>

    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,
};


export default ProfileTop
