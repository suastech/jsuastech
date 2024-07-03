import '../styles/Coding.css';
import CarouselProjects from './CarouselProjects';
import CallToAction from './CallToAction';
import cvImage from '../assets/images/cv.png'
import { Link } from 'react-router-dom';

export default function Coding() {


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
          My journey in coding began in 2023. In June 2024 I finished a certification course specialized in Web Development.
          <br/>
          Here you can check the projects I have developed and deployed, combining my interests and previous background with my skills as a programmer.
          <br/>
          Most of my professional life has been linked to academic work. I love to write. I am the author of a book and several articles of political and social analysis. 
        </div>
        
        
      </div>

      <div className='generic-box'>
        <div className='box-title'>Projects</div>
        <CarouselProjects/>
      </div>

      <div className='generic-box'>
        <div className='box-title'>Contact</div>
        <CallToAction/>
      </div>
    
    </div>

  </section>
)
}