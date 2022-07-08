import PropTypes from 'prop-types'


function Breadcrumb(props) {
  const {
      categories
  } = props

  return (
    <div>
      <span>Categories: </span>
      {categories.map((category, _) => {
        return <button onClick={() => category.onClick()}>{category.categoryName}</button>
      })}
    </div>
  )
}

Breadcrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    categoryName: PropTypes.string,
    onClick: PropTypes.func
  }))
}

export default Breadcrumb