import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames'
import mobileMenu from '../../img/mobileMenu.svg';
import mobileMenuClose from '../../img/mobileMenuClose.svg'
import './Navbar.scss'

function Navbar(props) {
  const {
    navbarDesktopIconSource,
    navbarMobileIconSource,
    links,
    onGetInTouchButtonClick
  } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const showMobileMenuContent = classNames('mobileMenuContent', {'--show': isMenuOpen})
  
  return (
    <div className='navbar'>
      <div className='navbarImage'>
        <a className='desktop' href='/'><img src={navbarDesktopIconSource} alt="" /></a>
        <a className='mobile' href='/'><img src={navbarMobileIconSource} alt="" /></a>
      </div>
      <div className='links'>
        {links.map((link, i) => {
          return <a key={i} href={link.url}>{link.linkName}</a>
        })}
        <button onClick={() => onGetInTouchButtonClick()}>Get in touch</button>
      </div>
      <div className='mobileMenu'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}><img src={mobileMenu} alt=''/></button>
          <div className={showMobileMenuContent}>
            <div class='mobileMenuTop'>
              <a className='mobile' href='/'><img src={navbarMobileIconSource} alt="" /></a>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}><img src={mobileMenuClose} alt=''/></button>
            </div>
            <div className='mobileLinks'>
            {links.map((link, i) => {
              return (
                <>
                  <a key={i} href={link.url}>{link.linkName}</a>
                  <hr />
                </>
              )
            })}
            <button onClick={() => onGetInTouchButtonClick()}>Get in touch</button>
            </div>
          </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  navbarDesktopIconSource: PropTypes.string,
  navbarMobileIconSource: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    linkName: PropTypes.string,
    url: PropTypes.string
  })),
  onGetInTouchButtonClick: PropTypes.func.isRequired
}

export default Navbar