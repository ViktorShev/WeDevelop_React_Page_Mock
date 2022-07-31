import PropTypes from 'prop-types';
import lodash from 'lodash';
import dotsPattern from '../../img/footerDotsPattern.svg'
import bottomShadow from '../../img/footerBottomShadow.svg'
import './Footer.scss'


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
    <>
      <div className='footerImages'>
        {footerTopImagesSource.map((url, i) => {
          return <img className='footerImage' key={i} src={url} alt="" />
        })}
      </div>
      <div className='footerGrid'>
        <div className='companyReview'>
          <div className='companyLogo'>
            <img src={footerIconSource} alt="" />
          </div>
          <div className='review'>
            <div className='reviewedOn'>
              <span>REVIEWED ON</span>
            </div>
            <div className='reviewRating'>
              <span className='ratingLeftNumber'>5.0</span><span className='ratingSeparator'>/</span><span className='ratingRightNumber'>5.0</span>
            </div>
            <div className='reviewStars'>
              {lodash.times((rating.rating)).map((_, i) => {
                return <img key={i} src={rating.ratingStarImgSource} alt="" />
              })}
              <span className='amountOfReviews'>4 reviews</span>
            </div>
            <div className='revieweeLogo'>
              <a href='https://clutch.co/profile/wedevelop?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo#summary' target='_blank' rel='noreferrer'><img src={revieweesIconSource} alt="" /></a>
            </div>
          </div>
        </div>
        <div className='companyInfo'>
          <span>COMPANY</span>
          <a href='/'>About us</a>
          <a href='/'>Our Team</a>
          <a href='/'>Blog</a>
          <a href='/'>Career</a>
        </div>
        <div className='companyServices'>
          <span>SERVICES</span>
          <a href='/'>Web Development</a>
          <a href='/'>Staff Augmentation</a>
          <a href='/'>Tailor Made</a>
        </div>
        <div className='companyTechnologies'>
          <span>TECHNOLOGIES</span>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a>
          <a href="https://www.python.org/" target="_blank" rel="noreferrer">Python</a>
          <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">AWS</a>
          <a href="https://graphql.org/" target="_blank" rel="noreferrer">GraphQL</a>
          <a href="https://rubyonrails.org/" >Ruby on Rails</a>
          <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a>
          <a href="https://www.mongodb.com/en" target="_blank" rel="noreferrer">MongoDB</a>
          <a href="/">See More<img className='seeMoreArrow' src={footerLinkDecorationImages.arrow} alt="" /></a>
        </div>
        <div className='companyContact'>
          <span>CONTACT US</span>
          <a href="/"><img className='emailIcon' src={footerLinkDecorationImages.email} alt=""/>info@wedevelop.me</a>
          <a href="/"><img className='locationIcon' src={footerLinkDecorationImages.location} alt="" />WeDevelop LLC FL 33134, US</a>
          <a href="/"><img className='phoneIcon' src={footerLinkDecorationImages.phone} alt="" />+1 (925) 448-6165</a>
        </div>
      </div>
      <div className='footerBottom'>
        <span>Privacy Policy | © 2021 WeDevelop LLC, All rights reserved</span>
        <div className='socialMedia'>
        {socialMedia.map((socialNetwork, i) => {
          return <button><a key={i} href={socialNetwork.urlToSocialMediaHandle}><img src={socialNetwork.socialMediaIconSource} alt="" /></a></button>
        })}
        </div>
        <img className='footerDotsPattern' src={dotsPattern} alt=""/>
        <img className='footerBottomShadow' src={bottomShadow} alt=""/>
      </div>
    </>
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