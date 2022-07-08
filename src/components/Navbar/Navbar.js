import PropTypes from 'prop-types'


function Navbar(props) {
  const {
    iconImageURL,
    links,
    onGetInTouchButtonClick
  } = props

  return (
    <div>
      <div>
        <button><img src={iconImageURL} alt="" /></button>
      </div>
      <div>
        {links.map((link, _) => {
          return <a href={link.url}><button>{link.linkName}</button></a>
        })}
      </div>
      <div>
        <button onClick={() => onGetInTouchButtonClick()}>Get in touch</button>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  iconImageURL: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    linkName: PropTypes.string,
    url: PropTypes.string
  })),
  onGetInTouchButtonClick: PropTypes.func
}

export default Navbar