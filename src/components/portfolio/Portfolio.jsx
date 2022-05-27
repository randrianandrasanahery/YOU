
import "./Portfolio.scss"
import tanjonao from './tanjonao.jpg';



export default function Portfolio(){
   return(
      <div className='portfolio' id="portfolio">
         <div className="slider"> 
            <div className="container_image">
               <div className="item">
                     <div className="btm_left">
                        <div className="leftcontainer">
                        </div>
                     </div>
                     <div className="btm_right">
                        <img src={tanjonao} alt=""/> 
                     </div>
               </div>
            </div>
         </div>
      </div>

   )
}