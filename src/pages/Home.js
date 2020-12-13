import React from 'react'

import Header from '../sections/Header/Header'
import Carrusel from '../components/Carrusel'
import About from '../sections/About/About'
import Subscribe from '../sections/Subscribe/Subscribe'
import Partnership from '../sections/Partnership/Partnership'

function Home() {
	return (
		<React.Fragment>
			<Header />
			<Carrusel />
			<About />
			<Subscribe />
			<Partnership />
		</React.Fragment>
	)
}

export default Home
