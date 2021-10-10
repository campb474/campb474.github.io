import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Proj1 from './Components/Pages/Proj1'
import Proj2 from './Components/Pages/Proj2'
import Proj3 from './Components/Pages/Proj3'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route path='/proj1' component={Proj1} />
        <Route path='/proj2' component={Proj2} />
        <Route path='/proj3' component={Proj3} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
