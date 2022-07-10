import useGetPosts from '../../hooks/useGetPosts.js'
import PostSection from '../PostSection/PostSection.js'

function PostsContainer() {
  const onPostClick = () => {
    console.log('A post has been clicked!')
  }
  const postSectionOnePosts = useGetPosts(3)
  const postSectionTwoPosts = useGetPosts(4)
  const postSectionThreePosts = useGetPosts(6)
  
  return (
    <div>
      <div>
        <PostSection postSectionTitle="FEATURED" postsTopic="Latest Posts" posts={postSectionOnePosts} onPostClick={onPostClick} />
      </div>
      <div>
        <PostSection postSectionTitle="PROJECTS" postsTopic="Business Research" posts={postSectionTwoPosts} onPostClick={onPostClick} />
      </div>
      <div>
        <PostSection postSectionTitle="TECHNOLOGIES & TRENDS" postsTopic="Coding" posts={postSectionThreePosts} onPostClick={onPostClick} />
      </div>
    </div> 
  )
}

export default PostsContainer
