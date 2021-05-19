import React from 'react';
import '../../App.css';
import CardHolder from '../CardHolder';
import Footer from '../Footer';
import LandingPage from '../LandingPage';

function Home () {
  return (
    <>
      <LandingPage />
      <CardHolder />
      <Footer />
    </>
  );
}

export default Home;

// We can render the LandingPage component here within the Home component. We use a functional component and then evoke it in App.js
// Import the CardHolder and Footer Components here. 