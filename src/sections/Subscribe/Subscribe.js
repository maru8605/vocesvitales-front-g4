import React from 'react'
import './Subscribe.css'

function Subscribe() {
	const [email, setEmail] = React.useState('')
	const [name, setName] = React.useState('')
	const [lastname, setLastname] = React.useState('')

	const onSubmit = (event) => {
		event.preventDefault()
		console.log({ email, name, lastname })
		//aca se llamara a la api y se le pasaran los valores
	}

	return (
		<section className="subscribe">
			<div className="subscribe__container">
				<h2 className="subscribe__title">SUSCRIBITE PARA RECIBIR NOVEDADES</h2>

				<form id="subscribe__form" onSubmit={onSubmit}>
					<div className="subscribe__form-group">
						<label id="email-label" htmlFor="email">
							EMAIL<span className="required">*</span>
						</label>
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							className="form__control"
						/>
					</div>

					<div className="subscribe__form-group">
						<label id="name-label" htmlFor="name">
							Nombre
						</label>
						<input
							type="text"
							name="name"
							id="name"
							value={name}
							onChange={(event) => setName(event.target.value)}
							className="form__control"
						/>
					</div>

					<div className="subscribe__form-group">
						<label id="lastname-label" htmlFor="lastname">
							Apellido
						</label>
						<input
							type="text"
							name="lastname"
							id="lastname"
							value={lastname}
							onChange={(event) => setLastname(event.target.value)}
							className="form__control"
						/>
					</div>

					<div className="subscribe__form-group">
						<button type="submit" id="submit" className="subscribe__button">
							SUSCRIBIRME
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Subscribe
