import React from 'react';
import Header from '../src/sections/Header/Header'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carrusel from './components/Carrusel'
import Modal from './components/Modal';
import Form from './components/Form'
import './form.css';



function App() {
return <>
  <Router>
    <Header/>
    <Carrusel/>
    <Switch>
      <Route path='/form' component={Form}/> 
      <Modal/>
    </Switch>           
  </Router>
</>
}

export default App;
