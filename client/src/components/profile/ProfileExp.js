import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileExp = ({ experience: { title, company, from, current, to, description}}) => 
<div>
    <h3 className="text-dark">{title}</h3>
    <p> <strong> Company: {company}</strong></p>
    <p><Moment format="DD/MM/YYYY">{from}</Moment> - {!to ? (' Now') : (<Moment format="DD/MM/YYYY">{to}</Moment>)
        }
    </p>
        <p>{description ? (<p><strong>Description: </strong> {description} </p>) : (" ")} </p>
        
    </div>;

ProfileExp.propTypes = {
    experience: PropTypes.array.isRequired,

}

export default ProfileExp
