import React from 'react'
import './SectionTitle.css'

function SectionTitle({ title, color }) {
	return (
		<React.Fragment>
			<h2 className="section__h2">{title}</h2>
			<div className={color ? 'line line--color' : 'line'}></div>
		</React.Fragment>
	)
}

SectionTitle.defaultProps = {
	color: false,
}

export default SectionTitle
