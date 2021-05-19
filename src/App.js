import React from 'react'
import './App.css';
import Nav from './components/Nav';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BlogPosts from './components/pages/BlogPosts';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
     <Nav />
      <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/blogposts" component = {BlogPosts} />
        <Route path = "/contact" component = {Contact} />
        <Route path = "/signup" component = {SignUp} />
      </Switch>
     </Router>
    </>
  );
}

export default App;

// Set route path to slash and exact component, inside curly boys we call Home function. 
// Import the remaining paths that will show the respective component. 