import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.js";
import PostsContainer from "../../components/PostsContainer/PostsContainer.js";

export default function Homepage() {
  return (
    <div>
      <Breadcrumb categories={[
        {categoryName: 'COVID-19', onClick: () => console.log('A category has been clicked!')},
        {categoryName: 'Business Research', onClick: () => console.log('A category has been clicked!')},
        {categoryName: 'Management', onClick: () => console.log('A category has been clicked!')},
        {categoryName: 'Coding', onClick: () => console.log('A category has been clicked!')}
        ]}>
      </Breadcrumb>
      <PostsContainer></PostsContainer>
    </div>
  )
}