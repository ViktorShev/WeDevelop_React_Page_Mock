import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.js";
import Layout from "../../components/Layout/Layout.js";
import NewsletterContainer from "../../components/NewsletterContainer/NewsletterContainer.js";
import PostsContainer from "../../components/PostsContainer/PostsContainer.js";

export default function Homepage() {
  return (
    <Layout>
      <Breadcrumb categories={[
        {categoryName: 'COVID-19', url: '#'},
        {categoryName: 'Business Research', url: '#'},
        {categoryName: 'Management', url: '#'},
        {categoryName: 'Coding', url: '#'}
        ]}>
      </Breadcrumb>
      <PostsContainer />
      <NewsletterContainer />
    </Layout>
  )
}