import PropTypes from 'prop-types'


function Navbar(props) {
  const {
    NavbarIconSource,
    links,
    onGetInTouchButtonClick
  } = props

  return (
    <div>
      <div>
        <a href='/'><img src={NavbarIconSource} alt="" /></a>
      </div>
      <div>
        {links.map((link, _) => {
          return <a href={link.url}>{link.linkName}</a>
        })}
      </div>
      <div>
        <button onClick={() => onGetInTouchButtonClick()}>Get in touch</button>
      </div>
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