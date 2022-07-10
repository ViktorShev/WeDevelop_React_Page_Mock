import PropTypes from 'prop-types'


function Navbar(props) {
  const {
    iconImageSource,
    links,
    onGetInTouchButtonClick
  } = props

  return (
    <div>
      <div>
        <button><img src={iconImageSource} alt="" /></button>
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
  iconImageSource: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    linkName: PropTypes.string,
    url: PropTypes.string
  })),
  onGetInTouchButtonClick: PropTypes.func
}

export default Navbar