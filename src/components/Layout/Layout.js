import PropTypes from 'prop-types';
import Footer from '../Footer/Footer.js';
import Navbar from '../Navbar/Navbar.js';
import useGetRating from '../../hooks/useGetRating.js';
import footerTopImg1 from '../../img/footerTopImg1.png';
import footerTopImg2 from '../../img/footerTopImg2.png';
import footerTopImg3 from '../../img/footerTopImg3.png';
import footerTopImg4 from '../../img/footerTopImg4.png';
import clutch from '../../img/clutch.png';
import desktopWeDevelopLogo from '../../img/desktopWeDevelopLogo.svg';
import arrow from '../../img/arrow.png';
import email from '../../img/email.png';
import location from '../../img/location.png';
import phone from '../../img/phone.png';
import linkedin from '../../img/linkedin.png';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';



function Layout(props) {
  const onGetInTouchButtonClick = function onGetInTouchButtonClick() {
    console.log('Touched!')
  }

  const rating = useGetRating()

  return (
    <>
      <Navbar 
        NavbarIconSource={desktopWeDevelopLogo} links={[
        {linkName: 'Services', url: '/'},
        {linkName: 'About us', url: '/'},
        {linkName: 'Testimonials', url: '/'},
        {linkName: 'Blog', url: '/'},
        {linkName: 'Career', url: '/'}
        ]} 
        onGetInTouchButtonClick={onGetInTouchButtonClick}
        />
        {props.children}
      <Footer 
        footerTopImagesSource={[
          footerTopImg1,
          footerTopImg2,
          footerTopImg3,
          footerTopImg4
        ]}
        footerIconSource={desktopWeDevelopLogo}
        footerLinkDecorationImagesSource={{
          arrow: arrow,
          email: email,
          location: location,
          phone: phone
          }}
        revieweesIconSource={clutch}
        rating={rating}
        socialMedia={[
          {socialMediaIconSource: linkedin, urlToSocialMediaHandle:'#'},
          {socialMediaIconSource: facebook, urlToSocialMediaHandle:'#'},
          {socialMediaIconSource: instagram, urlToSocialMediaHandle:'#'}
        ]}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default Layout