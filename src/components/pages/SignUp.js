import React from 'react';
import { useState, setState } from 'react';
import '../../App.css';


export default function SignUp () {

  const [form, setForm] = useState ({
    cityDetails: '',
  });
  // set state here for form & setForm

  const [city, setCity] = useState([])
  // set state for city and setCity 

  async function displayCity(e) {

      e.preventDefault(e);
        if (form.cityDetails === '') {
          alert("Please enter your seach here")
        } else {
       await fetch ("https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60", {
	            "method": "GET",
	            "headers": {
		           "x-rapidapi-key": "f6b75dd3a9msh181efc6db313b52p17e874jsnfa06dde9f4d5",
		          "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
	        }
      })
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
        }

  }

  // set data into state 
  // setCity(
  //   {
  //     response : response
  //   };
  // )

  // create function for handleChange
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({...form, city:value})
    }
  }

  return (
  <>
    <h1 className="signup">Sign Up Page</h1>
      <form>
        <input type = 'text' name = 'city' placeholder = 'Enter City Here' onChange={e=>handleChange(e)}></input>
          <button onClick={e => displayCity(e)}>Submit</button>
      </form>
  </>
  )
}

// 1. Follow the same process as the Contact.js component