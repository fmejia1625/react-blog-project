import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
      <Link to="/signUp" className="btn-mobile" >
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}>

          {children}

        </button>
      </Link> 
    )
};

// 1. import the usual (react from react, Button.css stylesheet, link from react-router-dom)
// 2. export button as const and assign logic (children, type, onClick, buttonStyle and button size)
// 3. create a ternary by assigning const checkButtonStyle to array STYLES, using the method .includes {determines whether an array includes a certain element, returning either true or false}. Use the same logic for button size. 
// 4. Return link component, direct it to signUp, give class name of btn-mobile. Inside Link component, create a button tag and pass in children which will automatically pass in component. 
// 5. Inside button, assign className to const checkButtonStyle and checkButtonSize using template strings. set type as {type} to ensure everything is being utilized. 