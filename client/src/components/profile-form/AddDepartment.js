import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addDepartment } from '../../actions/profile'

const AddDepartment = ({addDepartment, history}) => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        from: "",
        to: "",
        current: false,
    });

    const { 
        title, 
        from,
        to,
        current,
        description,

    } = formData

    
    const [toDateDisabled, toggleDisabled] = useState(false);
    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e =>{ 
      e.preventDefault();
      addDepartment(formData, history)
    }


    const handleScropTop = e => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <Fragment>
            <h1 className="large text-primary">
                <i class="fas fa-code-branch"></i> Add Department
            </h1>
            <p className="lead">
                Add your department
            </p>
            <form className="form" onSubmit={e => onSubmit(e)} >
                <div className="form-group">
                    <select value={title} onChange={e => onChange(e)} name="title">
                        <option value="0"> * Select department  </option>
                        <option value="Ofer - Teach & Product managment"> Ofer - Teach & Product managment </option>
                        <option value="Roei - Big Data & Server Developer"> Roei - Big Data & Server Developer </option>
                        <option value="Front-Developer"> Front-Developer </option>
                        <option value="System-analyst"> System-analyst </option>
                    </select>
                </div>
                <div className="form-group">
                    <select value={description} onChange={e => onChange(e)} name="description">
                        <option value="0"> * Select department description  </option>
                        <option value="Teach-managment"> Teach managment </option>
                        <option value="Product-managment"> Product managment </option>
                        <option value="Big-Data">Big Data</option>
                        <option value="Server">Server Developer </option>
                        <option value="Front-Developer">Front</option>
                        <option value="System-analyst"> System-analyst </option>
                    </select>
                </div>
 
                    {/* <div className="form-group">
                    <label for="job title">department</label>
                    <input type="text" placeholder=" title" name="title" value={title} onChange={e => onChange(e)}  required/>
                    </div>  */}

                    <div className="form-group">
                        <h4>From Date</h4>
                        <input type="date" name="from" value={from} onChange={e => onChange(e) } />
                    </div>
                    <div class="form-group">
                        <p>
                            <input 
                                type="checkbox" 
                                name="current" 
                                checked={current} 
                                value={current} 
                                onChange={e=> {
                                    setFormData({ ...formData, current: !current });
                                    toggleDisabled(!toDateDisabled);
                                }} />{' '} Current
                        </p>
                    </div>
                    <div className="form-group">
                        <h4>To date </h4>
                        <input 
                        type="date" 
                        name="to" 
                        value={to} 
                        onChange={e => onChange(e)} 
                        disabled={toDateDisabled ? 'disabled' : ''}  required />
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary my-1" onClick={e => handleScropTop(e) } />
                        <Link className="btn btn-light my-1" to="dash"> Go Back </Link>
                    </div>
            </form>
            
        </Fragment>
    )
}

AddDepartment.propTypes = {
    addDepartment: PropTypes.func.isRequired,

}

export default connect(null, { addDepartment })(withRouter(AddDepartment))
