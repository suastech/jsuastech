import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.css";
import { Carousel } from "react-responsive-carousel";
import github from "../assets/images/github.png";
import open from "../assets/images/open2.png";

import { useEffect, useState } from "react";

function CarouselProjects({projects}) {
  const [size, setSize] = useState(0);

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  
  const updateSize = () => {
    if (window.innerWidth > 770) {
      setSize(0);
    } else {
      setSize(1);
    }
  };

  const renderThumbs = () => {
    return projects.map((project, index) => (
      <img 
        key={index} 
        src={project.image} 
        alt={`thumb_${index}`} 
        className="custom-thumb"
      />
    ));
  };

return (
  <div className="carousel-container">
    <Carousel
      infiniteLoop={true}
      interval={5000}
      stopOnHover={true}
      renderThumbs={renderThumbs}
      showStatus={false}
      showThumbs={false}
    >
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        
        <div className="project-header">
          
          <div style={{display:"flex", alignItems:""}}>
            <a href={project.deployLink} target="_blank">{project.title}</a>
            <a href={project.deployLink} target="_blank" style={{marginTop:"5px"}}><div id="open-container"><img style={{width:"100%", hight:"auto"}} src={open} alt="open-icon"/></div></a>
          </div>

          <a href={project.githubLink} target="_blank" id="github-container" ><img id="github-logo"src={github} alt="githubIcon"/></a>
        </div>

        <div className="body-project-space">

          <div className="image-project-container">
             <img src={project.image[size]} alt={`slide_${index}`}/>
          </div>

          <div className="slide-footer small-screen">
            {project.techs.map( (element, index) => {
              return (
                <div className="tech-item" key={index}>{element}</div>
              )
            })}
          </div>

          <ul className="project-description">
          <div className="slide-footer big-screen">
            {project.techs.map( (element, index) => {
              return (
                <div className="tech-item" key={index}>{element}</div>
              )
            })}
        </div>
            {project.description.map( (paragraph, index) => {
              return(
               <li className="paragraph" key={index}>{paragraph}</li>
              )
              })
            }
            {project?.highlights && (
              <div className="highlights"> <b>Highlights:&nbsp; </b> {project.highlights.map(element => (
                  <>{element}. </>
                ))}
              </div>
             )}
          </ul>
        </div>

      </div>
    ))}

    </Carousel>
  </div>
)}

export default CarouselProjects;