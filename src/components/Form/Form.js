import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import './form.css'

const Form = ({ onChange }) => {
	const [name, setName] = useState('')
	const [lastName, setLastName] = ''
	const [email, setEmail] = useState('')
	const [role, setRole] = useState('')
	const [comments, setComments] = useState('')
	const [sent, setSent] = useState(false)

	const onNameChange = (event) => {
		setName(event.target.value)
	}
	const onLastNameChange = (event) => {
		setLastName(event.target.value)
	}
	const onEmailChange = (event) => {
		setEmail(event.target.value)
	}
	const onRoleChange = (event) => {
		setRole(event.target.value)
	}
	const onCommentsChange = (event) => {
		setComments(event.target.value)
	}

	return (
		<>
			<div className="body-form">
				<div className="form-banner">
					<header className="header">
						<h1 id="title" className="text-center title-form">
							¿Querés inspirar mujeres y liderar el cambio?
						</h1>
						<p id="description" className="description text-center">
							{' '}
							Sumate como mentora completando este formulario{' '}
						</p>
						<p className="description-mentoreo text-center">
							El mentoreo es uno de los regalos más poderosos que una mujer
							puede dar a otra, pues mejora tanto el liderazgo, como el
							crecimiento personal y profesional de ambas. Es un intercambio
							donde las mentoras aprecian que se les ofrezca la oportunidad de
							retribuir y compartir su experiencia, lo que, a su vez, ayuda a la
							aprendiz a crecer, a dar el siguiente gran paso más allá de su
							zona de confort.{' '}
						</p>
					</header>
					<form id="ad-form">
						<div className="form-group">
							<input
								type="text"
								name="name"
								id="name"
								className="form-control"
								placeholder="Nombre"
								required
								onChange={onNameChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								name="first-name"
								id="first-name"
								className="form-control"
								placeholder="Apellido"
								required
								onChange={onLastNameChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								name="email"
								id="email"
								className="form-control"
								placeholder="email@ejemplo.com"
								required
								onChange={onEmailChange}
							/>
						</div>
						<div form-group>
							<p className="text-center one">
								¿En qué área te gustaría acompañar a mujeres y/o proyectos?
							</p>
							<select
								id="dropdown"
								name="role"
								className="form-control mb-3"
								required
								onChange={onRoleChange}
							>
								<option disable selected value>
									Elige un área
								</option>
								<option value="">Negocios</option>
								<option value="">Arte</option>
								<option value="">Tecnología</option>
								<option value="">Comunicación </option>
								<option value="">Finanzas</option>
								<option value="">otra</option>
							</select>
						</div>

						<div className="form-group">
							<p className="text-center one">
								¿Tenés algún comentario o sugerencia ?{' '}
							</p>
							<textarea
								id="comments"
								className="input-textarea"
								name="comments"
								placeholder="Queremos saber tu opinión..."
								onChange={onCommentsChange}
							/>
						</div>

						<div className="form-group">
							<button
								type="submit"
								data-toggle="modal"
								data-target="#myModal"
								id="submit"
								className="submit-button"
							>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
			<Modal />
		</>
	)
}

export default Form
