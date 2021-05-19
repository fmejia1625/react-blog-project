import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { Button } from './Button';

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true); 
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link to="/" className="navbarLogo">
            Frankie's Coding BootCamp Blog <i className="fas fa-code"></i>
          </Link>
          <div className="menuIcon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className="nav-item">
              <Link to = "/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/blogPosts" className="nav-links" onClick={closeMobileMenu}>
                Blog Posts
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                Contact 
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/signUp" className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign Up
              </Link>
            </li>
          </ul>
          
          {button && <Button buttonStyle = 'btn--outline'>Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Nav;

// 1. Create navbar using react router and hooks. First, we create the nav component within nav tags and then assign classes to be used later. Import logos from Font Awesome and be sure to use CDN in index.HTML

// 2. Set state by assigning const click , set click to use state after importing useState. 

// 3. Create a function that sets useState to false (boolean) and switches between false and not false on click. Evoke function on hamburger icon using onClick event. 

// 4. create a div with ternary nav-menu active : nav-menu

// 5. Use the same logic when creating seperate links for Blog Posts and Contact components. 

// 6. Utilize the Button.js component and CSS styling here in the Nav. Inside curly boys, we use logical and to return a boolean (in this case, the button component along with styling 

// 7. set state for button using button, setButton. set useState as true. Create a function of showButton that will or will not display button if the innerWidth of window is less than 960 pixels. Else, it will setButton as true. 