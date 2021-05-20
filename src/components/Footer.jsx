import React from 'react'
import { Link } from 'react-router-dom'
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

      <div className="footerLinks">
        <div className="footerLinksWrapper">
          <div className="footerLinksItems">
            <h2>About Me</h2>
            <Link to = "signUp">How you can join</Link>
            <Link to = "/">Work in progress</Link>
            <Link to = "/">Lifestyle</Link>
            <Link to = "/">More Info</Link>
            <Link to = "/">Terms of Service</Link>
          </div>
          <div className="footerLinksItems">
            <h2>Contact Me</h2>
            <Link to = "/">Contact</Link>
            <Link to = "/">Support</Link>
            <Link to = "/">More Info</Link>
            <Link to = "/">Legal</Link>
          </div>
        </div>
        <div className="footerLinksWrapper">
          <div className="footerLinksItems">
            <h2>Lorem Ipsum</h2>
            <Link to = "/">Dummy Text</Link>
            <Link to = "/">More Dummy Text</Link>
            <Link to = "/">Even More Dummy Text</Link>
            <Link to = "/">Link to nowhere</Link>
          </div>
          <div className="footerLinksItems">
            <h2>Social Media</h2>
            <Link to = "/">Instagram</Link>
            <Link to = "/">LinkedIn</Link>
            <Link to = "/">GitHub</Link>
            <Link to = "/">FaceBook</Link>
          </div>
        </div>
      </div>
      <section className="socialMedia">
        <div className="socialMediaWrap">
          <div className="footerLogo">
            <Link to='/' className="socialLogo">
              Frankie's Coding Blog  <i className="fas fa-code" /> 
            </Link>
          </div>
          <small className="websiteRights">Frankie's Coding Blog &copy; 2021</small>
          <div className="socialIcons">
            <Link className="socialIconLink Instagram"
            to={{ pathname: "https://www.instagram.com/"}}
            target='_blank'
            aria-label='Instagram'>
                <i class="fab fa-instagram"></i>
            </Link>

            <Link className="socialIconLink LinkedIn"
            to={{ pathname: "https://www.linkedin.com/in/francisco-mejia-529510175/"}}
            target='_blank'
            aria-label='LinkedIn'>
                <i class="fab fa-linkedin"></i>
            </Link>

            <Link className="socialIconLink Github"
            to={{ pathname: "https://github.com/fmejia1625"}}
            target='_blank'
            aria-label='Github'>
                <i class="fab fa-github"></i>
            </Link>

            <Link className="socialIconLink Facebook"
            to={{ pathname: "https://www.facebook.com/francisco.mejia.1485"}}
            target='_blank'
            aria-label='Facebook'>
                <i class="fab fa-facebook"></i>
            </Link>
          </div>
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
// Underneath section div, create three divs with separate classes of links, wrapper and link items. 
// Using link tags, set path to signUp component and add text. 