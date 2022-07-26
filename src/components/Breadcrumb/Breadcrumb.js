import PropTypes from 'prop-types'
import './Breadcrumb.scss'

function Breadcrumb(props) {
  const {
      categories
  } = props

  return (
    <div className='breadcrumb'>
      <span className='breadcrumbCategoriesText'>Categories </span>
      {categories.map((category, i) => {
        return <button key={i}><a href={category.url}>{category.categoryName}</a></button>
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