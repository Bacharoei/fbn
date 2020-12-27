import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({ 
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => 
        setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2 ) {
            setAlert('Password Dont match', 'danger');
            
        } else {
            register({ name, email, password });

        }   
    }

    // Redirerct if logged in
    if(isAuthenticated) {
        return <Redirect to="/dash" />
    }

    return (
        <>   
            <section class="container">
                <h1 className="large text-primary mb-0">Sign Up</h1>
                    <p className="lead">
                        <i className="fas fa-user" /> Create Your Account
                    </p>
                    <small className="form-text"> 
                        This site uses an organization email. 
                        </small>

                    <form className="form" onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input 
                            type="text" 
                            placeholder="Name" 
                            name="name"
                            value={name}
                            onChange={e => onChange(e)}
                            // required 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                            type="email" 
                            placeholder="Email Address" 
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                            // required
                            />

                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={e => onChange(e)}
                                minLength="6"
                                // required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="password2"
                                value={password2}
                                onChange={e => onChange(e)}
                                minLength="6"
                                // required
                            />
                        </div>

                        <input type="submit" className="btn btn-primary" value="Register" />
                    </form>

                    <p className="my-1 lead">
                        Already have an account? 
                        <Link to="/login">Sign In</Link>
                    </p>
        </section>
    </>

    )
}

Register.propTypes = { 
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
