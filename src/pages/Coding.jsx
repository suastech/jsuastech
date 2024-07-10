import '../styles/Coding.css';
import CarouselProjects from '../components/CarouselProjects';
import CallToAction from '../components/CallToAction';
import cvImage from '../assets/images/cv.png'
import { Link } from 'react-router-dom';
import about from '../mySelf'

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
          {about.map( (element,index) => {
           return (
            <p key={index}>{element}</p>
            )
          })
          }

            <div className='info-extra'>
              <div> <b>What I´m good at...</b>
                  <p>Logical reasoning. I like to solve problems that require creativity.</p>
                  <p>I´m not afraid to undertake complex projects and take on new challenges.</p>
                  <p>I learn fast. I´m perseverant and I deliver on time.</p>
              </div>
              <div> <b>What I´m bad at...</b>
                  <p>When I speak German, the portraits of Goethe all over Germany cry out in pain.</p>
                  <p>CSS has caused me to have numerous anger and panic attacks.</p>
              </div>
            </div>
          
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