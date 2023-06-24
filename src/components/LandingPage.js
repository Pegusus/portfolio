import React from 'react';
import './LandingPage.css';
import Canvas from './Canvas/Canvas';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import AboutMe from './About Me/AboutMe';
import Blog from './Blog/Blog';
import Connect from './Connect/Connect';
import { useRef } from 'react';

const LandingPage = () => {
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const blogRef = useRef(null);
    const aboutMeRef = useRef(null);
    const connectRef = useRef(null);
    
  return (
    <div className='langing-page'>
        <Navbar 
            homeRef={homeRef}
            projectsRef={projectsRef} 
            blogRef={blogRef} 
            aboutMeRef={aboutMeRef} 
            connectRef={connectRef}
        />
        <Canvas/>
        <div className='navbar-dummy'></div>
        <Home ref={homeRef}/>
        <Projects ref={projectsRef}/>
        <Blog ref={blogRef}/>
        <AboutMe ref={aboutMeRef}/>
        <Connect ref={connectRef}/>
    </div>
  )
}

export default LandingPage