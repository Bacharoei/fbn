import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createExperience } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom'


const CreateExperience = ({ createExperience, history }) => {

    const [formData, setFormData] = useState({
        title: "",
        company: "",
        location: "",
        from: "",
        to: "",
        current: false,
        description: "",
      });

      const [toDateDisabled, toggleDisabled] = useState(false);
  
      const { 
        title,
        company,
        location,
        from,
        to,
        current,
        description,
      } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e =>{ 
      e.preventDefault();
      createExperience(formData, history)
    }

    const handleScropTop = e => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <Fragment>
            <h1 className="large text-primary">
                Add your Experience
            </h1>
            <p className="lead">
                <i class="fas fa-code-branch"></i> Add your current position or positions that you have had in the past            
            </p>
            <small className="form-text"> * required field </small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label for="job title">Job Title</label>
                    <input type="text" placeholder=" * Job Title" name="title" value={title} onChange={e => onChange(e)}  required/>
                </div>
                <div className="form-group">
                    <label for="job title">Company </label>
                    <input type="text" placeholder=" * company" name="company"  value={company} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <h4 for="job title">Location </h4>
                    <input type="text" placeholder=" * Location" name="location"  value={location} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <h4> From date </h4>
                    <input type="date" name="from" value={from} onChange={e => onChange(e)} required />
                </div>
                <div class="form-group">
                    <p><input type="checkbox" checked={current} name="current" value={current} onChange={e => { 
                        setFormData({ ...formData, current: !current});
                        toggleDisabled(!toDateDisabled)
                    }} required /> {' '} Current Position</p>
                </div>
                <div className="form-group">
                    <h4>To date </h4>
                    <input 
                    type="date" 
                    name="to" 
                    value={to} 
                    onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''}   />
                </div>
                <div className="form-group">
                    <textarea name="description" cols="30" rows="5" placeholder="Job Description" value={description} onChange={e => onChange(e)} ></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-primary my-1" onClick={e => handleScropTop(e) } />
                  <Link className="btn btn-light my-1" to="dash"> Go Back </Link>
                </div>
            </form>
          
        </Fragment>
    )
}

CreateExperience.propTypes = {
    createExperience: PropTypes.func.isRequired,

}



export default connect(null, { createExperience })(withRouter(CreateExperience))
