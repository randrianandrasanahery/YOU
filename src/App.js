import Topbar from "./components/topbar/Topbar";

import About from "./components/about/About";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./App.scss"


function App() {
  return (
    <div className='app'>
      <Topbar/>
      <div className='frames'>
        <Home/>
        <About/>  
        <Skills/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>

  )
}

export default App;
