import React from 'react';
import CardItems from './CardItems';
import './Cards.css';
import deskImg from './img/desk.JPG'; 

function CardHolder() {
  return (
    <div className="cards">
      <h1>Starting from the bottom, now we're here.</h1>
        <div className="cardContainer">
          <div className="cardsWrapper">
            <ul className="cardsItems">
              <CardItems 
              src = {deskImg}
              text = "How my programming skill has progressed since Day One. (CLICK ME!)"
              label = "Coding Setup"
              path = '/blogposts'
              />
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
// 4. Pass in props within CardItems component. 
// 5. Had to refactor the way in which images are rendered. I had to import the image above and then pass it within curly brackets to src. 