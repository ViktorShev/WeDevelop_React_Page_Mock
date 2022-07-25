import PropTypes from 'prop-types';
import Post from '../Post/Post.js';
import './PostSection.css'


function PostSection(props) {
  const {
    postSectionTitle,
    postsTopic,
    posts,
    viewAllButton,
    onPostClick
  } = props

  return (
    <div className='postSection'>
      <div className='sectionInfo'>
        <div className='sectionTitle'>{postSectionTitle}</div>
        <div className='sectionTopic'>{postsTopic}</div>
        <div className='separator'></div>
      </div>
        {posts.map((post, _) => {
          return (
              <Post key={post.postTitle} postTopic={post.postTopic} postTitle={post.postTitle} postAuthor={post.postAuthor} postImageURL={post.postImageURL} onClick={onPostClick}></Post>
          )
        })}
        {viewAllButton}
    </div>
  )
}

PostSection.propTypes = {
  postSectionTitle: PropTypes.string,
  postsTopic: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.shape({
    postTopic: PropTypes.string,
    postTitle: PropTypes.string,
    postAuthor: PropTypes.string,
    postImageURL: PropTypes.string
  })),
  viewAllButton: PropTypes.element,
  onPostClick: PropTypes.func.isRequired
}

export default PostSection