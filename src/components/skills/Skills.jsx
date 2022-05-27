import React from 'react'
import "./Skills.scss"
import languegep from './languagep.png';
import library from './library.png';
import adobe from './adobe.png';



export default function Skills(){
   return(
      <div className='skills' id="skills">

         <h1>FOR MY PROJECT, I USEALLY USE AS</h1>
         <p>Programming <span className='skills_langue'>Language</span></p>
         <img src={languegep} alt="language_de_programmation"  className='img_lg'></img>

         <div className='library_framework'>

            <div className='competence'>
                  <>
                     Framework <span className='library'>- Library</span>
                     <span className='design'>Design <span className='designt'>tools</span></span>
                  </>
            </div>
            <div className='images'>
                  <>
                     <img src={library} alt="library"  className='img_library' ></img>
                     <img src={adobe} alt="design tool"  className='img_design' ></img>
                  </>
            </div>
         </div>
      </div>
   )
}