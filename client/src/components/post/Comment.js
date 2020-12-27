import React, { Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { addComment } from '../../actions/post';
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';

const Comment = ({ postId, addComment }) => {

    const [formData, setFromData] = useState({
        text: ""
    });

    const { text } = formData;

    const onChange = e => {
        setFromData({ ...formData, [e.target.name]: e.target.value});
    };

    const onSubmit = e => {
        e.preventDefault();
        addComment(postId, formData);
    };


    return (
        <Fragment>
            <div className="post-form">
                <div className="bg-primary p">
                    <h3> Comment...</h3>
                </div>
            </div>
            <form onSubmit={e => onSubmit(e)} className="form my-1">
                <textarea 
                name="text" 
                cols="30" 
                rows="3" 
                placeholder="Write a comment" 
                value={text}
                onChange={e => onChange(e)} required />

                <input type="submit" className="btn btn-dark my-1" value="Submit"></input>
            </form>
            
        </Fragment>
    )
}

Comment.propTypes = {
    addComment: PropTypes.func.isRequired,


}

export default connect(null, { addComment })(withRouter(Comment))




   
