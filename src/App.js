import React from 'react';
import Header from '../src/sections/Header/Header'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carrusel from './components/Carrusel'
import Modal from './components/Modal';
import Form from './components/Form'
import './form.css';
import About from './sections/About/About'
import Subscribe from './sections/Subscribe/Subscribe'
import Partnership from './sections/Partnership/Partnership'



function App() {
return <>
  <Router>
    <Header/>
    <Carrusel/>
    <About />
		<Subscribe />
		<Partnership />
    <Switch>
      <Route path='/form' component={Form}/> 
      <Modal/>
    </Switch>           
  </Router>
</>
}


export default App;
