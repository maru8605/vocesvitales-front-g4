import React from 'react'

import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Partnership.css'

function Partnership() {
	return (
		<React.Fragment>
			<section className="partnership">
				<SectionTitle title="VITAL VOICES GLOBAL PARTNERSHIP" />
				<p className="partnership__info">
					Voces Vitales Argentina es el capítulo local de Vital Voices Global
					Partnership, organización creada en 1997 en Estados Unidos por
					iniciativa de de la entonces Primera Dama, Hillary Clinton.
					Actualmente, la red está presente en 142 países de América Latina y El
					Caribe, África, Asia, Europa Oriental y el Medio Oriente.
				</p>
				<p className="partnership__info">
					Vital Voices Global Partnership trabaja para crear conciencia de los
					agentes de cambio emergentes en su amplia red de contactos alrededor
					del mundo. Con esta finalidad, los programas de desarrollo de
					liderazgo se enfocan en tres temas principales, que creemos tienen el
					mayor impacto para un cambio social sostenible: generar oportunidades
					económicas, expandir la participación política, y proteger los
					derechos humanos.
				</p>
				<a href="https://www.vitalvoices.org" className="partnership__link">
					www.vitalvoices.org
				</a>
			</section>
			<div className="bottom__triangle"></div>
		</React.Fragment>
	)
}

export default Partnership
