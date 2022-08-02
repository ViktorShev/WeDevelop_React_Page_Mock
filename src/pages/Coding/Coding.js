import useGetPosts from "../../hooks/useGetPosts.js";
import Layout from "../../components/Layout/Layout.js";
import NewsletterContainer from "../../components/NewsletterContainer/NewsletterContainer.js";
import PostSection from "../../components/PostSection/PostSection.js";
import BackToBlogButton from "../../components/BackToBlogButton/BackToBlogButton.js";

export default function Coding() {
  const codingPosts = useGetPosts(9)

  return (
    <Layout>
      <BackToBlogButton url="/"/>
      <div className="postSectionsContainer">
        <PostSection postSectionTitle="CATEGORY" postsTopic="Coding" posts={codingPosts} sectionID={'coding'} onPostClick={() => {console.log('A post has been clicked!')}}/>
      </div>
      <NewsletterContainer />
    </Layout>
  )
}