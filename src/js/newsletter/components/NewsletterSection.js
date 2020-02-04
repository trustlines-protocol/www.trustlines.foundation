import React from "react"
import NewsletterWrapper from "./NewsletterWrapper"
import Appeal from "./Appeal"
import SubscribeForm from "./SubscribeForm"
import { setUserHasSubscribedOrClosedBanner } from "../state/subscriptionState"

function NewsletterSection() {
  const handleSubscription = () => {
    setUserHasSubscribedOrClosedBanner()
  }

  return (
    <NewsletterWrapper className="has-background-light has-text-black has-decent-padding">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter has-text-centered">
          <Appeal className="has-text-black">
            Be the first to hear about Trustlines Protocol related updates,
            subscribe to our newsletter!
          </Appeal>
        </div>
      </div>
      <div className="columns">
        <div className="column is-4 is-offset-4">
          <SubscribeForm onSubscriptionSend={handleSubscription} />
        </div>
      </div>
    </NewsletterWrapper>
  )
}

export default NewsletterSection
