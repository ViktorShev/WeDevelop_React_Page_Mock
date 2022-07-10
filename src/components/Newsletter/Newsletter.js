import PropTypes from 'prop-types'


function NewsletterSubscriptionForm(props) {
  const {
    onSubscribeButtonClick
  } = props

  return (
    <div>
      <div>
        <span>NEWSLETTER</span>
        <span>Subscribe to our newsletter</span>
        <form>
          <input type="email" placeholder="Email" id="email-field"></input>
          <button type="button" onClick={() => onSubscribeButtonClick()}>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

NewsletterSubscriptionForm.propTypes = {
  onSubscribeButtonClick: PropTypes.func
}

export default NewsletterSubscriptionForm