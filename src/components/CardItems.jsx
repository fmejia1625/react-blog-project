import React from 'react';
import { Link } from 'react-router-dom'

function CardItems() {
  return (
    <>
      <li className="cardContent">
        <Link className="cardContentLink">
          <figure className="cardsItemPictureWrap">
            <img src="/" alt="Work Pic" className="cardsItemImage" />
          </figure>

          <div className="cardsItemInfo">
            <h5 className="cardsItemText">Test</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItems;

// 1. Create a new component that will display the items within each card, aptly named CardItem. Import Link from react-router-dom. 
// 2. Create li with className CardContent, use Link to wrap figure tag. Within figure element, we will display our image. 
// 3. Create a div that will show the h5 on the browser. Nothing has rendered yet, need to pass into CardHolder.js 