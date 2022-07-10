import PropTypes from 'prop-types'
import lodash from 'lodash'


function Footer(props) {
  const {
    footerTopImagesURLs,
    footerIconURL,
    footerLinkDecorationImagesSource,
    revieweesIconURL,
    rating,
    socialMedia
  } = props

  return (
    <div>
      <div>
        {footerTopImagesURLs.map((url, _) => {
          return <img src={url} alt="" />
        })}
      </div>
      <div>
        <button>
          <img src={footerIconURL} alt="" />
        </button>
      </div>
      <div>
        <span>REVIEWED ON</span>
      </div>
      <div>
        <span>5.0</span><span>/5.0</span>
      </div>
      <div>
        {lodash.times((rating.rating)).map(() => {
          return <img src={rating.ratingStarImgSource} alt="" />
        })}
      </div>
      <div>
        <img src={revieweesIconURL} alt="" />
      </div>
      <div>
        <div>
          <span>COMPANY</span>
          <a href='#'>About us</a>
          <a href='#'>Our Team</a>
          <a href='#'>Blog</a>
          <a href='#'>Career</a>
        </div>
        <div>
          <span>SERVICES</span>
          <a href='#'>Web Development</a>
          <a href='#'>Staff Augmentation</a>
          <a href='#'>Tailor Made</a>
        </div>
        <div>
          <span>Technologies</span>
          <a href="#">React</a>
          <a href="#">Node.js</a>
          <a href="#">Python</a>
          <a href="#">AWS</a>
          <a href="#">GraphQL</a>
        </div>
        <div>
          <a href="#">Ruby on Rails</a>
          <a href="#">PostgreSQL</a>
          <a href="#">MongoDB</a>
        </div>
        <div>
          <a href="#">See More</a>
          <img src={footerLinkDecorationImagesSource.arrow} alt="" />
        </div>
        <div>
          <span>CONTACT US</span>
          <a href="#">info@wedevelop.me</a>
          <img src={footerLinkDecorationImagesSource.email} alt=""/>
          <a href="#">WeDevelop LLC FL 33134, US</a>
          <img src={footerLinkDecorationImagesSource.location} alt="" />
          <a href="#">+1 (925) 448-6165</a>
          <img src={footerLinkDecorationImagesSource.phone} alt="" />
        </div>
      </div>
      <div>
        <span>Privacy Policy | © 2021 WeDevelop LLC, All rights reserved</span>
      </div>
      <div>
        {socialMedia.map((socialNetwork, _) => {
          return <a href={socialNetwork.urlToSocialMediaHandle}><button><img src={socialNetwork.socialMediaIconSource} alt="" /></button></a>
        })}
      </div>
    </div>
  )
}

Footer.propTypes = {
  footerTopImagesURLs: PropTypes.arrayOf(PropTypes.string),
  footerIconSource: PropTypes.string,
  footerLinkDecorationImagesSource: PropTypes.objectOf(PropTypes.string),
  revieweesIconSource: PropTypes.string,
  rating: PropTypes.shape({
    rating: PropTypes.number,
    ratingStarImgSource: PropTypes.string
  }),
  socialMedia: PropTypes.arrayOf(PropTypes.shape({
    socialMediaIconSource: PropTypes.string,
    urlToSocialMediaHandle: PropTypes.string
  }))
}

export default Footer