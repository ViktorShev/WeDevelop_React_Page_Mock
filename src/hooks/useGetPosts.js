import { useState } from 'react'
import randomListItem from '../utils/randomListItem'

export default function useGetPosts (n_of_posts) {
  const [posts, setPosts] = useState([])
  const postTopics = ['Business research', 'Coding', 'Management']
  const tempPostArray = []

  for (let i = 0; i < n_of_posts; i++) {
    tempPostArray.push({
      postTopic: randomListItem(postTopics),
      postTitle: 'How to face a crisis and be successful',
      postAuthor: 'Author Name',
      postImageURL: 'https://imgur.com/a/RjaZi0u'
    })
  }
  setPosts(tempPostArray)
  return posts
}