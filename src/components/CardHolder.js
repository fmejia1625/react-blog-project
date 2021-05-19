import React from 'react';
import CardItems from './CardItems';
import './Cards.css';
import deskImg from './img/desk.JPG'; 
import queensImg from './img/queens.jpg';
import dashImg from './img/canvas.JPG';
import lectureImg from './img/lecture.JPG'
import catImg from './img/cat.jpeg'

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
              <CardItems 
                src = {dashImg}
                text = "Weeks One through Four: Being thrown into the fire (What is sleep?)"
                label = "Checking on what assignments are due for the day"
                path = '/blogposts'
              />
            </ul>
            <ul className="cardsItems">
              <CardItems 
                src = {lectureImg}
                text = "Weeks Five through Nine: Battle of Attrition"
                label = "My instructor Tory giving a lesson"
                path = '/blogposts'
              />
              <CardItems 
                src = {queensImg}
                text = "Want to get in contact? Click to find out how!"
                label = "Whitestone Bridge, Queens, NYC"
                path = '/contact'
              />
              <CardItems 
                src = {catImg}
                text = "Join my non-existent community now by signing up. You won't regret it! (hopefully)"
                label = "Join us"
                path = '/signUp'
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
// 6. I re-use the CardItems component by copying and pasting and setting each to its corresponding path.