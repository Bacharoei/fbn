import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteDepr } from '../../actions/profile'

const Department = ({ education, deleteDepr }) => {
    const educations = education && education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.title}</td>
            <td>{edu.description}</td>
            <td>
                <Moment format="DD/MM/YYYY">{edu.from}</Moment> - {' '}
                {edu.to === null ? (' Now') : (<Moment format="DD/MM/YYYY">{edu.to}</Moment>)}
            </td>
            <button onClick={() => deleteDepr(edu._id) } className="btn btn-danger">Delete</button>
        </tr>
    ))
    return (
        <Fragment>
            <h2 className="my-2"> Department Credentials </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Department</th>
                        <th className="hide-sm">description</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody> {educations} </tbody>
            </table>

            
        </Fragment>
    )
}

Department.propTypes = {
    education: PropTypes.array.isRequired,
    deleteDepr: PropTypes.func.isRequired,

}

export default connect(null, { deleteDepr })(Department)




