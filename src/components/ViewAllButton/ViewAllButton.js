import PropTypes from 'prop-types';
import viewAllArrow from '../../img/viewAllArrow.png';


function ViewAllButton(props) {
  const { url } = props
  return (
    <a className="viewAll" href={url}>View all<img src={viewAllArrow} alt=""/></a>
  )
}

ViewAllButton.propTypes = {
  url: PropTypes.string.isRequired
}

export default ViewAllButton