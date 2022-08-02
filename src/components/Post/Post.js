import PropTypes from 'prop-types'
import './Post.scss'


function Post(props) {
  const {
    postTopic,
    postTitle,
    postAuthor,
    postImageURL,
    onClick,
  } = props


  return (
    <div className='clickablePost' onClick={() => onClick()}>
      <img className='postImage' src={postImageURL} alt=""/>
        <div className='postInfo'>
          <span className='postTopic'>{postTopic}</span>
          <span className='postTitle'>{postTitle}</span>
          <span className='postAuthor'>By {postAuthor}</span>
        </div>
    </div>
  )
}

Post.propTypes = {
  postTopic: PropTypes.string,
  postTitle: PropTypes.string,
  postAuthor: PropTypes.string,
  postImageURL: PropTypes.string,
  onClick: PropTypes.func
}

export default Post