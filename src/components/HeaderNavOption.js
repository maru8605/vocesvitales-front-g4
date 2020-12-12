import React from 'react';


const HeaderNavOption =(props)=>{
    return(
       <ul title={props.title}>
           {props.title}
           <li option1={props.option1}>
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
       </ul>
    )
}

export default HeaderNavOption;