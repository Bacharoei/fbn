import React, { Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import { addPost } from '../../actions/post';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const PostForm = ({ addPost }) => {

    const [formData, setFromData] = useState({
        text: "",
    });
    const {text} = formData;

    const onChange = e => {
        setFromData({...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        addPost(formData)
    }

    return (
        <Fragment>
            <div className="post-form">
                <div className="bg-primary p">
                    <h3>Say Something...</h3>
                </div>
            </div>
            <form onSubmit={e => onSubmit(e)} className="form my-1">
                <textarea 
                name="text" 
                cols="30" 
                rows="5" 
                placeholder="Create a post" 
                value={text}
                onChange={e => onChange(e)} required />

                <input type="submit" class="btn btn-dark my-1" value="Submit"></input>
            </form>
  
            
        </Fragment>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,

}

export default connect(null, { addPost })(withRouter(PostForm))
