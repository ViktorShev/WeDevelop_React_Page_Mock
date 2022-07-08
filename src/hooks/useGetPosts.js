import randomListItem from '../utils/randomListItem'

export default function useGetPosts (numberOfPosts) {
  const posts = []
  const postTopics = ['Business research', 'Coding', 'Management']

  for (let i = 0; i < numberOfPosts; i++) {
    posts.push({
      postTopic: randomListItem(postTopics),
      postTitle: 'How to face a crisis and be successful',
      postAuthor: 'Author Name',
      postImageURL: 'https://media.istockphoto.com/photos/detailed-real-php-lines-on-the-blue-background-picture-id995963490?k=20&m=995963490&s=170667a&w=0&h=oBEkb7tYmVqN1H6bgAgf_uxccLc8KQH1Y4cwJcoCfHY='
    })
  }
  
  return posts
}