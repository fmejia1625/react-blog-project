import React from 'react';
import {useEffect} from 'react';
import '../../App.css';


function SignUp () {

// use window.onload to call function
// Revised using useEffect

useEffect(() => {
  randomUserGenerator()
});

// create function to fetch data from randomuser API
const randomUserGenerator = () => {
// use .then to get ahold of the data and log the response and json. We see the difference here. 
// use .then to return promise and retireve our data. Now we need to render the data. 
    // eslint-disable-next-line
    fetch('https://randomuser.me/api')
    .then((response) => {
        return response.json()
    }) .then((data) => {
      console.log(data)
      showRandomUserData(data)
    })
}

 const showRandomUserData = (randomUser) => {

    document.querySelector('.name').innerText = 
      `${randomUser.results[0].name.title} ${randomUser.results[0].name.first} ${randomUser.results[0].name.last}`
      
    document.querySelector('.photo').src = `${randomUser.results[0].picture.large}`  

    document.querySelector('.age').innerText = `${randomUser.results[0].dob.age}`

    document.querySelector('.email').innerText = `${randomUser.results[0].email}`

    document.querySelector('.phone').innerText = `${randomUser.results[0].phone}`   
}

  return (
  <>
    <div className="signup">
      <h1>List of Contributors</h1>
      &nbsp;
      <h2> Take a look at all of our users!</h2>
      &nbsp;
      <h3><img className="photo" src = '' alt = 'profile'></img></h3>
      &nbsp;
      <h3>Name:</h3><p className="name">___</p>
      <h3>Age: </h3><p className="age">___</p>
      <h3>Email: </h3><p className="email">___</p>
      <h3>Phone: </h3><p className="phone">___</p>
      <button onClick={randomUserGenerator}>Generate user</button>

    </div>
  </>
  )
}
 export default SignUp;
// 1. Follow the same process as the Contact.js component