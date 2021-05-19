import React from 'react';
import '../../App.css';
import LandingPage from '../LandingPage';

function Home () {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default Home;

// We can render the LandingPage component here within the Home component. We use a functioncal component and then call it in App.js