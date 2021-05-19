import React from 'react';
import { Link } from 'react-router-dom';

function CardItems(props) {
  return (
    <>
      <li className="cardContent">
        <Link className="cardContentLink" to = {props.path}>
          <figure className="cardsItemPictureWrap" data-category = {props.label}>
            <img 
            className="cardsItemImage" 
            alt="Work Pic" 
            src = {props.src}
            />
          </figure>

          <div className="cardsItemInfo">
            <h5 className="cardsItemText">{props.text}</h5>
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
// 4. Pass in props in order to render to CardHolder component. Pass in props.path, props.label, props.src and props.text to show component. 