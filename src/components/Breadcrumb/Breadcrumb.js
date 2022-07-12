import PropTypes from 'prop-types'


function Breadcrumb(props) {
  const {
      categories
  } = props

  return (
    <div>
      <span>Categories: </span>
      {categories.map((category, _) => {
        return <a href={category.url}><button>{category.categoryName}</button></a>
      })}
    </div>
  )
}

Breadcrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    categoryName: PropTypes.string,
    url: PropTypes.string
  }))
}

export default Breadcrumb