import React from 'react';
import CardItems from './CardItems';
import './Cards.css';

function CardHolder() {
  return (
    <div className="cards">
      <h1>Test Heading</h1>
        <div className="cardContainer">
          <div className="cardsWrapper">
            <ul className="cardsItems">
              <CardItems />
            </ul>
          </div>
        </div>
    </div>
  )
}

export default CardHolder

// 1. Within CardHolder component, we render the CardItems component within the ul and nested divs in order to display teh h5 and links created previously.
// 2. In order to display the CardHolder component to the browser, we export to the Home component located in pages folder. 
// 3. Import the Cards stylesheet above in order to apply the styling to its respective component container. 