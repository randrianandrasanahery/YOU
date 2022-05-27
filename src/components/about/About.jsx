import React from 'react'
import "./About.scss"
import cuate from "./cuate.png";



export default function About(){
   console.log(cuate); /*pour afficher le retoure en console */
   return(
      <div className="about" id="About">

         <div className='icone_right'>
            <img src={cuate} alt="icone about " height={400}/>
         </div>
         <div className='text_about_bidy'>
            <h1>WHO I AM ?</h1>
            <h2>Hi everyone ,i am <span className='name_of_bidy'>François Sarobidy</span>,an IT<br/> student who come from the ISPM intitute<br/>Antsobolo, a web junior developer </h2>
            <br/>
            Apart from coding , i love playing basketball, travelling
            and reading
         </div>
         
      </div>
   )
}