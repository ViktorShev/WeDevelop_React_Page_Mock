import PropTypes from 'prop-types';
import viewAllArrow from '../../img/viewAllArrow.png';
import './ViewAllButton.scss'


function ViewAllButton(props) {
  const { url } = props
  return (
    <a href={url}>View All<img className="viewAllArrow" src={viewAllArrow} alt=""/></a>
  )
}

ViewAllButton.propTypes = {
  url: PropTypes.string.isRequired
}

export default ViewAllButton