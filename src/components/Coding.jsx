import '../styles/Coding.css';
import CarouselProjects from './CarouselProjects';
import CallToAction from './CallToAction';
import projects from "../assets/projects-list.json";
import cvImage from '../assets/images/cv.png'
import { Link, useLocation } from 'react-router-dom';
import about from '../mySelf';
import { useEffect } from 'react';

export default function Coding() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const techs = [... new Set (projects.map( element => element.techs).flat())]

  return (
  <section className='content-page'>
    
    <div className='width-content'>
    
      <div className='generic-box'>

        <div className='box-title'>
          About
          <Link to="/cv/coding" >     
            <img src={cvImage} className='cv-coding'/>
          </Link>
        </div>
      
        <div className='about-info'>
          {about.map( (element,index) => {
           return (
            <p key={index}>{element}</p>
            )
          })
          }

          <div className='info-extra'>
              <div> <b>What I´m good at...</b>
                  <p>Logical reasoning. I like solving problems that require creativity.</p>
                  <p>I´m not afraid to undertake complex projects and take on new challenges.</p>
                  <p>I can spend hours coding just for the fun.</p>
              </div>
              <div> <b>What I´m bad at...</b>
                  <p>When I speak German, the portraits of Goethe all over Germany cry out in pain.</p>
                  <p>I recently started boxing. God forbid I have to fight one day.</p>
              </div>
          </div>

          <div className='techs-container'>
            Frameworks & Libraries:

            <div className='techs-list'>
              {
              techs.map( (element, index) => {
                return (
                  <div className='tech-item' key={index}>
                    {element}
                  </div>
                )
              })
              }
            </div>

          </div>
          
        </div>    
        
        
      </div>

      <div className='generic-box'>
        <div className='box-title' id='projects'>Projects&nbsp;<span style={{fontSize: ".4em"}}>(sorted by complexity)</span></div>
        <CarouselProjects projects={projects}/>
      </div>

      <div className='generic-box'>
        <div className='box-title'>Contact</div>
        <CallToAction/>
      </div>
    
    </div>

  </section>
)
}