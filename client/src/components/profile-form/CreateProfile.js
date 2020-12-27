import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom'


const CreatePorifle = ({ createProfile, history }) => {

    const [formData, setFormData] = useState({
        company: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        facebook: '',
        linkedin: '',
    });

    const { 
        company,
        location,
        status,
        skills,
        githubusername,
        bio,
        facebook,
        linkedin,
    } = formData

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e =>{ 
      e.preventDefault();
      createProfile(formData, history)

    }




    return (
        <Fragment>
            <h1 className="large text-primary">
                Create your profile
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i>
                 Let's get some info to make your profile stand out               
            </p>
            <small className="form-text"> * required field </small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <select value={status} onChange={e => onChange(e)} name="status">
                        <option value="0"> * Select job role Status </option>
                        <option value="ETL-Developer"> ETL-Developer </option>
                        <option value="Backend-Developer"> Backend-Developer </option>
                        <option value="Front-Developer"> Front-Developer </option>
                        <option value="System-analyst"> System-analyst </option>
                        <option value="QA"> QA </option>
                        <option value="Unit-Manager"> Unit-Manager </option>
                        <option value="Director"> Director </option>
                    </select>
                    <small className="form-text">  Give us what your job role status  </small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder=" * Company" name="company" value={company} onChange={e => onChange(e)} />
                    <small className="form-text"> Could be internal IDB employee or one you work fo Out-Source  </small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder=" * Location" name="location"  value={location} onChange={e => onChange(e)} />
                    <small className="form-text"> where you are located * e.g: Herzel 160, TLV  </small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder=" * Skills" name="skills" value={skills} onChange={e => onChange(e)}   />
                    <small className="form-text"> please use comma separated values (e.g HTML, CSS, JS, Phyton)  </small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder=" * Jira User-Name" name="githubusername" value={githubusername} onChange={e => onChange(e)} />
                    <small className="form-text">  please proivde you D user  </small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder=" * Direct Manager" name="bio" value={bio} onChange={e => onChange(e)} />
                    <small className="form-text">  please proivde your direct manager name  </small>
                </div>
                <div className="my-2">
                    <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
                        Add Social Network
                    </button>
                    <span> * Optional </span>
                    {
                        displaySocialInputs && <Fragment>
                            <div className="form-group social-input">
                                <i className="fab fa-linkedin fa-2x"></i>
                                <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group social-input">
                                <i className="fab fa-facebook fa-2x"></i>
                                <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)} />
                            </div>

                        </Fragment>
                    }

                </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-primary my-1" />
                  <Link className="btn btn-light my-1" to="dash"> Go Back </Link>
                </div>
            </form>
          
        </Fragment>
    )
}

CreatePorifle.propTypes = {
  createProfile: PropTypes.func.isRequired,

}



export default connect(null, { createProfile })(withRouter(CreatePorifle))
