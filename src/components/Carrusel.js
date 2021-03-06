import React from 'react'

import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'

const Carrusel = () => {
	return (
		<div className="container carrusel">
			<div className="row">
				<div
					id="carouselExampleControls"
					className="carousel slide"
					data-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<a
								title="Vital Network"
								href="https://sites.google.com/vitalnetwork.org/ellahacehistoria"
								target="_blank"
							>
								<img className="d-block w-100" src={img1} alt="First slide" />
							</a>
						</div>
						<div className="carousel-item">
							<a
								title="Alumni Voces Vitales"
								href="https://www.instagram.com/alumnivocesvitales/"
								target="_blank"
							>
								<img className="d-block w-100" src={img2} alt="Second slide" />
							</a>
						</div>
						<div className="carousel-item">
							<a title="" href="" target="_blank">
								<img className="d-block w-100" src={img3} alt="Third slide" />
							</a>
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleControls"
						role="button"
						data-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleControls"
						role="button"
						data-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Carrusel
