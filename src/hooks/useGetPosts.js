import randomListItem from '../utils/randomListItem.js';
import postImage from '../img/postImage.jpg';

export default function useGetPosts (numberOfPosts) {
  const posts = []
  const postTopics = ['Business research', 'Coding', 'Management']

  for (let i = 0; i < numberOfPosts; i++) {
    posts.push({
      postTopic: randomListItem(postTopics),
      postTitle: 'How to face a crisis and be successful',
      postAuthor: 'Author Name',
      postImageURL: postImage
    })
  }
  
  return posts
}