import PropTypes from 'prop-types';
import Post from '../Post/Post.js';
import './PostSection.scss'


function PostSection(props) {
  const {
    postSectionTitle,
    postsTopic,
    posts,
    viewAllButton,
    sectionID,
    onPostClick
  } = props

  return (
    <div className='postSectionContainer'>
      <div className='sectionInfo'>
        <div className='sectionTitle'>{postSectionTitle}</div>
        <div className='sectionTopic'>{postsTopic}</div>
        <div className='separator'></div>
      </div>
      <div className='postsGrid' id={sectionID}>
        {posts.map((post, _) => {
          return (
            <div className='post'>
             <Post key={post.postTitle} postTopic={post.postTopic} postTitle={post.postTitle} postAuthor={post.postAuthor} postImageURL={post.postImageURL} onClick={onPostClick}/>
            </div>
          )
        })}
        {viewAllButton}
      </div>
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
  sectionID: PropTypes.string,
  onPostClick: PropTypes.func.isRequired
}

export default PostSection