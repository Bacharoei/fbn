import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { createExperience } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const AddExperience = ({ createExperience, history }) => {

    const [formData, setFromData] = useState({
        title: "",
        company: "",
        location: "",
        from: "",
        to: "",
        current: false,
        description: "",
    });

    const { 
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = formData

    const [toDateDisabled, toggleDisabled] = useState(false)

    const onChange = e => {
        setFromData({...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = e => { 
        e.preventDefault();
        createExperience(formData, history)
    }

    const handleScropTop = e => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }


    return (
        <Fragment>
            <h1 className="large text-primary">
                Add Your Experience
            </h1>
            <p className="lead">
                <i class="fas fa-code-branch"></i>
                Add your current position
            </p>
            <small className="form-text"> * required field </small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Job Title" name="title" value={title} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="company" name="company" value={company} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="location" name="location" value={location} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" value={from} onChange={e => onChange(e)}  />
                </div>
                <div className="form-group">
                    <p> <input type="checkbox" checked={current} name="current" value={current}
                        onChange={e => {
                            setFromData({ ...formData, current: !current});
                            toggleDisabled(!toDateDisabled)
                        }} /> {' '} Current Position
                    </p> 
                </div>
                <div className="form-group">
                    <h4> To Date </h4>
                    <input type="date" name="to" value={to} onChange={e => onChange(e)} />
                </div>
                <div className="form-gorup">
                    <textarea name="description" cols="30" row="5"  placeholder="Description" value={description} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary my-1" onClick={e => handleScropTop(e)} />
                    <Link className="btn btn-light my-1" to="/dash">Go Back </Link>
                </div>

            </form>
            
        </Fragment>
    )
}

AddExperience.propTypes = {
    createExperience: PropTypes.func.isRequired,

}

export default connect(null, { createExperience })(withRouter(AddExperience))
