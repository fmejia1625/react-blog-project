import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
        </div>
      </nav>
    </>
  );
}

export default Nav;

// 1. Create navbar using react router and hooks. First, we create the nav component within nav tags and then assign classes to be used later. Import logos from Font Awesome and be sure to use CDN in index.HTML 
// 2. Set state by assigning const click , set click to use state after importing useState. 
// 3. Create a function that sets useState to false (boolean) and switches between false and not false on click. Evoke function on hamburger icon using onClick event. 