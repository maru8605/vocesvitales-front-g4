import React from 'react'

import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Modal from './components/Modal'
import Form from './components/Form/Form'
import Home from './pages/Home'

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/form" component={Form} />
					<Route path="/" component={Home} />
					<Modal />
				</Switch>
			</Router>
		</>
	)
}

export default App
