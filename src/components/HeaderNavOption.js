import React from 'react';
import '../css/components/HeaderNavOption.css';


const HeaderNavOption =(props)=>{
    return(
       <ul title={props.title} className='ul' >
           {props.title}
           <div className='prueba2'>
           <li option1={props.option1} className='prueba'>
              <a href={props.link1}>{props.option1}</a>
           </li >
           <li option2={props.option2}>
               <a href={props.link2} >{props.option2}</a>
           </li>
           <li option3={props.option3}>
               <a  href={props.link3}>{props.option3}</a>
           </li>
           <li option4={props.option4}>
               <a href={props.link4}>{props.option4}</a>
           </li>
           <li option5={props.option5}>
               <a href={props.link5}>{props.option5}</a>
           </li>
           </div>
       </ul>
    )
}

export default HeaderNavOption;