import React from 'react';
import '../../css/sections/Header.css'

import HeaderLogo from '../../components/HeaderLogo';
import HeaderNav from '../../components/HeaderNav';

const Header =()=>{
    return (
        
        <div className='header'>
            <HeaderLogo></HeaderLogo>
            <HeaderNav></HeaderNav>
        </div>
      
    )
}

export default Header