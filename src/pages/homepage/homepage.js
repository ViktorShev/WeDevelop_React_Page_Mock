import useGetPosts from "../../hooks/useGetPosts.js";
import Layout from "../../components/Layout/Layout.js";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.js";
import PostSection from "../../components/PostSection/PostSection.js";
import NewsletterContainer from "../../components/NewsletterContainer/NewsletterContainer.js";
import ViewAllButton from "../../components/ViewAllButton/ViewAllButton.js";

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
      <PostSection postSectionTitle="FEATURED" postsTopic="Latest Posts" posts={postSectionOnePosts} viewAllButton={null} onPostClick={() => {console.log('A post has been clicked!')}} />
      <PostSection postSectionTitle="PROJECTS" postsTopic="Business Research" posts={postSectionTwoPosts} viewAllButton={<ViewAllButton url="/"/>} onPostClick={() => {console.log('A post has been clicked!')}} />
      <PostSection postSectionTitle="TECHNOLOGIES & TRENDS" postsTopic="Coding" posts={postSectionThreePosts} viewAllButton={<ViewAllButton url="/coding"/>} onPostClick={() => {console.log('A post has been clicked!')}} />
      <NewsletterContainer />
    </Layout>
  )
}