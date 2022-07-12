import NewsletterSubscriptionForm from "../Newsletter/Newsletter.js"


function NewsletterContainer() {

  const onSubscribeButtonClick = function() {
    const email = document.getElementById("email-field").value
    console.log(`${email} subscribed to the newsletter.`)
  }

  return (
    <NewsletterSubscriptionForm onSubscribeButtonClick={onSubscribeButtonClick} />
  )
}

export default NewsletterContainer