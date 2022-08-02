import PropTypes from 'prop-types';
import searchIcon from '../../img/breadcrumbSearchIcon.svg';
import './Breadcrumb.scss';

function Breadcrumb(props) {
  const {
      categories
  } = props

  return (
    <div className='breadcrumb'>
      <div className='desktopBreadcrumb'>
        <div className='desktopBreadcrumbContent'>
          <span>Categories</span>
          {categories.map((category, i) => {
            return <button key={i}><a href={category.url}>{category.categoryName}</a></button>
          })}
        </div>
        <img src={searchIcon} alt=""/>
      </div>
      <div className='mobileBreadcrumb'>
        <div className='mobileBreacrumbContent'>
          <span>Categories </span>
          <select>
            <option>All</option>
            {categories.map((category, i) => {
              return <option key={i}><a href={category.url}>{category.categoryName}</a></option>
            })}
          </select>
        </div>
        <img src={searchIcon} alt=""/>
      </div>
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