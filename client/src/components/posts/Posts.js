import React, {Fragment, useEffect} from 'react'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'
import { getPosts } from '../../actions/post';
import PostItem from './PostItem'
import PostForm from './PostForm';


const Posts = ({ getPosts, post: {posts, loading}}) => {

    useEffect(() => {
        getPosts()
    }, [getPosts])

    return ( 
        <Fragment>
            {
                loading ? <Spinner /> : <Fragment>
                    <h1 className="large text-primary">Posts</h1>
                    <p className="lead">
                        <i className="fas fa-user" /> Welcome to your feed
                    </p>
                    <PostForm />
                    <div className="posts">
                        {posts.length > 0 ? ( 
                            posts.map(post => (
                                <PostItem key={post._id} post={post} />
                            ))
                        ): <h4> No posts found...</h4>}
                    </div>
                     </Fragment>
            }
        </Fragment>
    )}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
  });


export default connect(mapStateToProps, { getPosts })(Posts)

