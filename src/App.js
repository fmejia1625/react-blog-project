import React from 'react'
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
     <Nav />
      <Switch>
        <Route path = "/" exact />
      </Switch>
     </Router>
    </>
  );
}

export default App;
