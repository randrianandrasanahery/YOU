import "./topbar.css";
import {useState} from "react";
import logo from "./LOGO.png";

export default function Topbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className='navigation'>
      <div className="wapper">
        <a href="/" className="brand-logo"><img src={logo} className="img-fluid logo" alt="brand" /></a>
        <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}> {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>


      </div>
    
      <div className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
      <ul>
        <li><a className="homep" href="#Home">Home</a></li>
        <li><a className="aboutp" href="#About">ABOUT</a></li>
        <li><a className="skillsp" href="#skills">SKILLS</a></li>
        <li><a className="portfoliop" href="#portfolio">Portfolio</a></li>
        <li><a className="contactp" href="#contact">Contact</a></li>
      </ul>
      </div>
     
    </div>
    
    );
    
}