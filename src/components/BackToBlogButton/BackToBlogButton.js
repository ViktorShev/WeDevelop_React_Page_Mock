import PropTypes from 'prop-types';
import backArrow from '../../img/backArrow.png';
import './BackToBlogButton.scss'


function BackToBlogButton(props) {
  const { url } = props
  return (
    <a className='backToBlog' href={url}><img src={backArrow} alt=""/>Back to blog</a>
  )
}

BackToBlogButton.propTypes = {
  url: PropTypes.string.isRequired
}

export default BackToBlogButton