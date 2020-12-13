import React from 'react';
import HeaderNavOption from './HeaderNavOption';
import '../css/components/HeaderNav.css';

const HeaderNav =()=>{
    return(
        <nav className='header-nav'>
          <HeaderNavOption
          title='QUIENES SOMOS'
          option1='VVGP'
          link1='https://www.vocesvitales.org.ar/#vvgp'
          option2='Argentina y cono sur'
          link2='https://www.vocesvitales.org.ar/#arg'
          option3='Mujeres lideres'
          link3='https://redmujereslideres.org/'
          option4='Donde trabajamos'
          link4='https://www.vocesvitales.org.ar/#donde'
          option5='Equipo'
          link5='https://www.vocesvitales.org.ar/equipo/'
          />
          <HeaderNavOption
          title='PROGRAMAS INSTITUCIONALES '
          option1='Programas a medida'
          link1='https://www.vocesvitales.org.ar/esquema/#programa'
          option2='Modelo de liderazgo'
          link2='https://www.vocesvitales.org.ar/esquema/#amedida'
          option3='Alianzas'
          link3='https://www.vocesvitales.org.ar/#alianzas'
          option4='Reporte anual'
          link4='https://www.vocesvitales.org.ar/reportes/'
          />
          <HeaderNavOption
          title='SUMATE A LA RED'
          option1='Doná'
          link1='https://www.vocesvitales.org.ar/#contacto'
          option2='Alumni VVA'
          link2='https://www.canva.com/design/DADt6Sgx47c/kVGql4cNm-QLbNjkyTaL0w/view?utm_content=DADt6Sgx47c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#8'
          option3='Red regional de mujeres lideres'
          link3='https://redmujereslideres.org/home'
          option4='Noticias '
          link4='https://www.facebook.com/VocesVitalesAr/'
          option5='Sumate'
          link5='https://www.facebook.com/VocesVitalesAr/'
          />
          <HeaderNavOption
          title='CONTACTO'
          />
        </nav>
    )
}

export default HeaderNav;