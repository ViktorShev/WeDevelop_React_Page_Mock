import PropTypes from 'prop-types'


function Footer(props) {
  const {
    footerIconURL,
    revieweesIconURL,
    ratingStarImageURL,
    links,
    socialMediaIcons
  } = props

  return;
}

Footer.propTypes = {
  footerIconURL: PropTypes.string,
  revieweesIconURL: PropTypes.string,
  ratingStarImageURL: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    linkName: PropTypes.string,
    url: PropTypes.string
  })),
  socialMediaIcons: PropTypes.arrayOf(PropTypes.shape({
    socialMediaName: PropTypes.string,
    imageURL: PropTypes.string
  }))
}