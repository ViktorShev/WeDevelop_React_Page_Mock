import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.js";
import PostsContainer from "../../components/PostsContainer/PostsContainer.js";

export default function Homepage() {
  return (
    <div>
      <Breadcrumb categories={[
        {categoryName: 'COVID-19', url: '#'},
        {categoryName: 'Business Research', url: '#'},
        {categoryName: 'Management', url: '#'},
        {categoryName: 'Coding', url: '#'}
        ]}>
      </Breadcrumb>
      <PostsContainer></PostsContainer>
    </div>
  )
}