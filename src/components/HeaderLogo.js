import React from 'react';
import '../css/components/HeaderLogo.css';

import Logo from '../img/VocesVitalesLogo.png';




const HeaderLogo =()=>{
   return(
       <div className="headerlogo">
           <img src={Logo} className='logo-img'  />
       </div>
   )
}

export default HeaderLogo;