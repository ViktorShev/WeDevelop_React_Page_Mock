import PropTypes from 'prop-types'
import './Post.css'


function Post(props) {
  const {
    postTopic,
    postTitle,
    postAuthor,
    postImageURL,
    onClick,
  } = props

  return (
    <button className='post' onClick={() => onClick()}>
      <img className='postImage' src={postImageURL} alt=""/>
      <div className='postInfo'>
        <span className='postTopic'>{postTopic}</span>
        <span className='postTitle'>{postTitle}</span>
        <span className='postAuthor'>{postAuthor}</span>
      </div>
    </button>
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