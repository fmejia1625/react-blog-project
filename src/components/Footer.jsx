import React from 'react'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
      <section className="footerSubscription">
        <p className="footerSubscriptionHeading">
          Stay up to date on the latest blog postings so you don't miss out!
        </p>
        <p className="footerSubscriptionText">
            No commitment necessary! You can leave at any time. 
        </p>
        <div className="inputAreas">
          <form>
            <input type="email" name="email" placeholder="Enter your Email here" className="footerInput" />
            <Button buttonStyle = 'btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Footer

// Create a footer component. 
// Within the div and section, create two P elements that will contain the heading and the text. 
// Create a form that will wrap the input tags and then assign it for email. 
// After the input, render the Button component and style the button using pre-defined values. 