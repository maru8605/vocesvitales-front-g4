import React from 'react';
import Logo from '../img/VocesVitalesLogo.png';
import '../css/components/HeaderLogo.css';


const HeaderLogo =()=>{
   return(
       <div classname="headerlogo">
           <img src={Logo} classname='logo-img'  />
       </div>
   )
}

export default HeaderLogo;