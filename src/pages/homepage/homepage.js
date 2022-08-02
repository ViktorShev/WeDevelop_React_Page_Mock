import useGetPosts from "../../hooks/useGetPosts.js";
import Layout from "../../components/Layout/Layout.js";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.js";
import PostSection from "../../components/PostSection/PostSection.js";
import NewsletterContainer from "../../components/NewsletterContainer/NewsletterContainer.js";
import ViewAllButton from "../../components/ViewAllButton/ViewAllButton.js";
import featuredBackground from '../../img/featuredBackground.svg'
import featuredDotsPattern from '../../img/featuredDotsPattern.svg'
import featuredLeftCircle from '../../img/featuredLeftCircle.svg'
import './Homepage.scss'

export default function Homepage() {
  const postSectionOnePosts = useGetPosts(3)
  const postSectionTwoPosts = useGetPosts(4)
  const postSectionThreePosts = useGetPosts(6)

  return (
    <Layout>
    <Breadcrumb categories={[
      {categoryName: 'COVID-19', url: '#'},
      {categoryName: 'Business Research', url: '#'},
      {categoryName: 'Management', url: '#'},
      {categoryName: 'Coding', url: '/coding'}
      ]}>
    </Breadcrumb>
    <div className="postSectionsContainer">
      <img className='featuredBackground' src={featuredBackground} alt=""/>
      <img className='featuredDotsPattern' src={featuredDotsPattern} alt=""/>
      <img className='featuredLeftCircle' src={featuredLeftCircle} alt=""/>
      <PostSection postSectionTitle='FEATURED' postsTopic="Latest Posts" posts={postSectionOnePosts} sectionID={'featured'} onPostClick={() => {console.log('A post has been clicked!')}} />
      <PostSection postSectionTitle='PROJECTS' postsTopic="Business Research" posts={postSectionTwoPosts} sectionID={'projects'} viewAllButton={<ViewAllButton url="/"/>} onPostClick={() => {console.log('A post has been clicked!')}} />
      <PostSection postSectionTitle="TECHNOLOGIES & TRENDS" postsTopic="Coding" posts={postSectionThreePosts} sectionID={'coding'} viewAllButton={<ViewAllButton url="/coding"/>} onPostClick={() => {console.log('A post has been clicked!')}} />
    </div>
    <NewsletterContainer />
    </Layout>
  )
}