import React from 'react'
import './AboutArticle.css'
function AboutArticle({ title, src, description }) {
	return (
		<article className="about__article">
			<div className="about__imgbox">
				<img src={src} />
			</div>

			<h3>{title}</h3>
			<p>{description}</p>
		</article>
	)
}

export default AboutArticle
