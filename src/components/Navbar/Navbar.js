import PropTypes from 'prop-types'
import './Navbar.css'

function Navbar(props) {
  const {
    NavbarIconSource,
    links,
    onGetInTouchButtonClick
  } = props

  return (
    <div className='navbar'>
      <div className='navbarImage'>
        <a href='/'><img src={NavbarIconSource} alt="" /></a>
      </div>
      <div className='links'>
        {links.map((link, i) => {
          return <a key={i} href={link.url}>{link.linkName}</a>
        })}
      </div>
        <button className='getInTouchButton' onClick={() => onGetInTouchButtonClick()}>Get in touch</button>
    </div>
  )
}

Navbar.propTypes = {
  NavbarIconSource: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    linkName: PropTypes.string,
    url: PropTypes.string
  })),
  onGetInTouchButtonClick: PropTypes.func.isRequired
}

export default Navbar