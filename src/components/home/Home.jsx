import React from 'react'
import "./Home.scss"
import saryBidy1 from './saryBidy1.png';
import saryBidy2 from './saryBidy2.png';
import saryBidy3 from './saryBidy3.png';



export default function Home(){
   return(
   <div className='titrehome' id="Home">
      <div className="hello">
        <h2 > Hello,
 <br/><br/>I'm</h2>
    
    <div className="nom"  >
      <h1 >FRANçois SAROBIDY</h1>
    </div>
    <div className="description">
      <h3> A passionate student in Computer Science, Multimedia and <br/> Telecommunication</h3>
    </div>
   
    </div>
    <div className="sary">
      <img src={saryBidy1} alt="" className="imagebidy1"/>
      <img src={saryBidy2} alt="" className="imagebidy2"/>
      <img src={saryBidy3} alt="" className="imagebidy3"/>
    </div>
   </div>
   
  

   );
}