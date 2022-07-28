import PropTypes from 'prop-types'
import './Newsletter.scss'


function NewsletterSubscriptionForm(props) {
  const {
    onSubscribeButtonClick
  } = props

  return (
    <>
      <div className='newsletter'>
        <span className='newsletterHeader'>NEWSLETTER</span>
        <h1>Subscribe to our newsletter</h1>
        <div className='separator'></div>
        <form className='newsletterSubscriptionForm'>
          <input type="email" placeholder="Email" id="email-field"></input>
          <button type="button" onClick={() => onSubscribeButtonClick()}>Subscribe</button>
        </form>
      </div>
    </>
  )
}

NewsletterSubscriptionForm.propTypes = {
  onSubscribeButtonClick: PropTypes.func.isRequired
}

export default NewsletterSubscriptionForm