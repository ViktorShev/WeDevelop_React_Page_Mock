import useGetPosts from "../../hooks/useGetPosts.js";
import Layout from "../../components/Layout/Layout.js";
import NewsletterContainer from "../../components/NewsletterContainer/NewsletterContainer.js";
import PostSection from "../../components/PostSection/PostSection.js";

export default function Coding() {
  const codingPosts = useGetPosts(9)

  return (
    <Layout>
      <PostSection postSectionTitle="CATEGORY" postsTopic="Coding" posts={codingPosts} onPostClick={() => {console.log('A post has been clicked!')}}/>
      <NewsletterContainer />
    </Layout>
  )
}