import React from 'react'
import AboutArticle from '../../components/AboutArticle/AboutArticle'
import './About.css'

function About() {
	return (
		<section className="about">
			<div className="about__header">
				<h2>VOCES VITALES ARGENTINA</h2>
				<div className="line"></div>
				<p className="description">
					VOCES VITALES ES LA ORGANIZACIÓN QUE IDENTIFICA, CAPACITA Y EMPODERA A
					MUJERES LÍDERES EMERGENTES Y ESTABLECIDAS EN TODO EL MUNDO,
					APOYÁNDOLAS PARA QUE PUEDAN CREAR UN MUNDO MEJOR.
				</p>
				<p className="description">
					EN VOCES VITALES CREEMOS EN INVERTIR EN MUJERES, PORQUE TIENEN EL
					POTENCIAL Y SIENTEN LA RESPONSABILIDAD DE LLEVAR A LAS SOCIEDADES
					HACIA DELANTE, CON SU VISIÓN Y EJEMPLO.
				</p>
				<p className="description">
					CREAN OPORTUNIDADES, CULTURA DE CAMBIO Y ACELERAN EL PROGRESO.
				</p>
			</div>

			<div className="about__columns">
				<AboutArticle
					title="QUÉ HACEMOS"
					description="Promovemos el liderazgo de mujeres pioneras en el progreso
						económico, político y social de sus comunidades."
					src="/img/que-hacemos.png"
				/>

				<AboutArticle
					title="CÓMO LO HACEMOS"
					description="Fortaleciendo sus capacidades, vínculos y la credibilidad que ellas
          necesitan. Ofrecemos mentoreo, herramientas prácticas y conexiones."
					src="/img/como-hacemos.png"
				/>

				<AboutArticle
					title="PARA QUÉ LO HACEMOS"
					description="Para que las mujeres puedan desarrollar planes estratégicos, contar
          sus historias y acceder a nuevas oportunidades, dando paso a su
          potencial como catalizadoras del progreso social."
					src="/img/para-que.png"
				/>

				<AboutArticle
					title="PROGRAMA DE MENTORIAS"
					description="Para que las mujeres puedan desarrollar planes estratégicos, contar
          sus historias y acceder a nuevas oportunidades, dando paso a su
          potencial como catalizadoras del progreso social."
					src="/img/mentorias.png"
				/>
			</div>
		</section>
	)
}

export default About
