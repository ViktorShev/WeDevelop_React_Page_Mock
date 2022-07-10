import PropTypes from 'prop-types'
import lodash from 'lodash'


function Footer(props) {
  const {
    footerTopImagesSource,
    footerIconSource,
    footerLinkDecorationImagesSource: footerLinkDecorationImages,
    revieweesIconSource,
    rating,
    socialMedia
  } = props

  return (
    <div>
      <div>
        {footerTopImagesSource.map((url, _) => {
          return <img src={url} alt="" />
        })}
      </div>
      <div>
        <img src={footerIconSource} alt="" />
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
        <span>4 reviews</span>
      </div>
      <div>
        <img src={revieweesIconSource} alt="" />
      </div>
      <div>
        <div>
          <span>COMPANY</span>
          <a href='/'>About us</a>
          <a href='/'>Our Team</a>
          <a href='/'>Blog</a>
          <a href='/'>Career</a>
        </div>
        <div>
          <span>SERVICES</span>
          <a href='/'>Web Development</a>
          <a href='/'>Staff Augmentation</a>
          <a href='/'>Tailor Made</a>
        </div>
        <div>
          <span>Technologies</span>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a>
          <a href="https://www.python.org/" target="_blank" rel="noreferrer">Python</a>
          <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">AWS</a>
          <a href="https://graphql.org/" target="_blank" rel="noreferrer">GraphQL</a>
        </div>
        <div>
          <a href="https://rubyonrails.org/" >Ruby on Rails</a>
          <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a>
          <a href="https://www.mongodb.com/en" target="_blank" rel="noreferrer">MongoDB</a>
        </div>
        <div>
          <a href="/">See More</a>
          <img src={footerLinkDecorationImages.arrow} alt="" />
        </div>
        <div>
          <span>CONTACT US</span>
          <img src={footerLinkDecorationImages.email} alt=""/>
          <a href="/">info@wedevelop.me</a>
          <img src={footerLinkDecorationImages.location} alt="" />
          <a href="/">WeDevelop LLC FL 33134, US</a>
          <img src={footerLinkDecorationImages.phone} alt="" />
          <a href="/">+1 (925) 448-6165</a>
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
  footerTopImagesSource: PropTypes.arrayOf(PropTypes.string),
  footerIconSource: PropTypes.string,
  footerLinkDecorationImages: PropTypes.objectOf(PropTypes.string),
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