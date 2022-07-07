import PropTypes from 'prop-types'


function Post(props) {
  const {
    postTopic,
    postTitle,
    postAuthor,
    postImageURL,
    onClick
  } = props

  return (
    <button onClick={onClick}>
      <img src={postImageURL} alt=""/>
      <div>
        <span>{postTopic}</span>
        <span>{postTitle}</span>
        <span>{postAuthor}</span>
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