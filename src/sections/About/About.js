import React from 'react'
import AboutArticle from '../../components/AboutArticle/AboutArticle'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './About.css'
import queHacemos from '../../img/que-hacemos.png'
import comoHacemos from '../../img/como-hacemos.png'
import paraQue from '../../img/para-que.png'
import mentorias from '../../img/mentorias.png'

function About() {
	return (
		<section className="about">
			<div className="about__header">
				<SectionTitle title="VOCES VITALES ARGENTINA" />
				<p className="about__description">
					VOCES VITALES ES LA ORGANIZACIÓN QUE IDENTIFICA, CAPACITA Y EMPODERA A
					MUJERES LÍDERES EMERGENTES Y ESTABLECIDAS EN TODO EL MUNDO,
					APOYÁNDOLAS PARA QUE PUEDAN CREAR UN MUNDO MEJOR.
				</p>
				<p className="about__description">
					EN VOCES VITALES CREEMOS EN INVERTIR EN MUJERES, PORQUE TIENEN EL
					POTENCIAL Y SIENTEN LA RESPONSABILIDAD DE LLEVAR A LAS SOCIEDADES
					HACIA DELANTE, CON SU VISIÓN Y EJEMPLO.
				</p>
				<p className="about__description">
					CREAN OPORTUNIDADES, CULTURA DE CAMBIO Y ACELERAN EL PROGRESO.
				</p>
			</div>

			<div className="about__columns">
				<AboutArticle
					title="QUÉ HACEMOS"
					description="Promovemos el liderazgo de mujeres pioneras en el progreso
						económico, político y social de sus comunidades."
					src={queHacemos}
				/>

				<AboutArticle
					title="CÓMO LO HACEMOS"
					description="Fortaleciendo sus capacidades, vínculos y la credibilidad que ellas
          necesitan. Ofrecemos mentoreo, herramientas prácticas y conexiones."
					src={comoHacemos}
				/>

				<AboutArticle
					title="PARA QUÉ LO HACEMOS"
					description="Para que las mujeres puedan desarrollar planes estratégicos, contar
          sus historias y acceder a nuevas oportunidades, dando paso a su
          potencial como catalizadoras del progreso social."
					src={paraQue}
				/>

				<AboutArticle
					title="PROGRAMA DE MENTORIAS"
					description="El programa de mentorías de Voces Vitales permite conectar mujeres que quieren dar un salto en su trayectoria profesional, con mujeres líderes destacadas que buscan inspirar con su experiencia."
					src={mentorias}
				/>
			</div>
		</section>
	)
}

export default About
