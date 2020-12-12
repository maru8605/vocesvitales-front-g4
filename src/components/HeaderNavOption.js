import React from 'react';


const HeaderNavOption =(props)=>{
    return(
       <ul title={props.title}>
           <li option1={props.option1}>
               <a></a>
           </li >
           <li option2={props.option2}>
               <a></a>
           </li>
           <li option3={props.option3}>
               <a></a>
           </li>
           <li option4={props.option4}>
               <a></a>
           </li>
           <li option5={props.option5}>
               <a></a>
           </li>
       </ul>
    )
}

export default HeaderNavOption;