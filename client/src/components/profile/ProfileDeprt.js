
import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileDeprt = ({ education: { title, description, from, current, to}}) => 
<div>
    <h3 className="text-dark">{title}</h3>
    <p> <strong> description: {description}</strong></p>
    <p><Moment format="DD/MM/YYYY">{from}</Moment> - {!to ? (' Now') : (<Moment format="DD/MM/YYYY">{to}</Moment>)
        }
    </p>
        
    </div>;

ProfileDeprt.propTypes = {
    education: PropTypes.array.isRequired,

}

export default ProfileDeprt

