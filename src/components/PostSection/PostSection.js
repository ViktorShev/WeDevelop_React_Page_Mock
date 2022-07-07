import PropTypes from 'prop-types'
import Post from '../Post/Post.js'


function PostSection(props) {
  const {
    postSectionTitle,
    postsTopic,
    posts,
    onPostClick
  } = props

  return (
    <div>
      <div>
        <span>{postSectionTitle}</span>
      </div>
      <div>
        <span>{postsTopic}</span>
      </div>
      {posts.map((post, _) => {
        return (
          <div>
            <Post postTopic={post.postTopic} postTitle={post.postTitle} postAuthor={post.postAuthor} postImageURL={post.postImageURL} onClick={() => onPostClick}></Post>
          </div>
        )
      })}
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
  onPostClick: PropTypes.func
}

export default PostSection