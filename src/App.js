import React from 'react'
import './App.css';
import Nav from './components/Nav';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
     <Nav />
      <Switch>
        <Route path = "/" exact component = {Home} />
      </Switch>
     </Router>
    </>
  );
}

export default App;

// Set route path to slash and exact component, inside curly boys we call Home function. 