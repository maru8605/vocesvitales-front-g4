import React from 'react';
import HeaderNavOption from './HeaderNavOption';

const HeaderNav =()=>{
    return(
        <nav classname=''>
          <HeaderNavOption
          title='Quienes somos'
          option1='VVGP'
          option2='Argentina y cono sur'
          option3='Mujeres lideres'
          option4='Donde trabajamos'
          option5='Equipo'
          />
          <HeaderNavOption
          title='programas institucionales'
          option1='Programas a medida'
          option2='Modelo de liderazgo'
          option3='Alianzas'
          option4='Reporte anual'
          />
          <HeaderNavOption
          title='Dona'
          option1= 'Alumni VVA'
          option2='Red regional de mujeres lideres'
          option3='Noticias '
          option4='Sumate'
          />
        </nav>
    )
}

export default HeaderNav;