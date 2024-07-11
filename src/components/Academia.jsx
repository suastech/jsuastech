import '../styles/Academia.css'
import publications from '../assets/publications-list.json'
import { useState } from 'react';
import arrow from '../assets/images/arrow.png'
import { Link } from 'react-router-dom';
import cvImage from '../assets/images/cv.png'


function renderItem({item, index}) {
  return (
    <li key={index} className='publication-item'>
      <a href={item.url} target='_blank'>
        <i> {item.title}.&nbsp;
            {item.subtitle.length > 0? `${item.subtitle}. `:``}
        </i>
        {item.infoEdition.length >0 ? `${item.infoEdition}. `: ``}
        {item.extra.length >0 ? `${item.extra}. `: ``}

      </a>
    </li>
  )
}

export default function Academia() {
  const [bookOpen, setBookOpen] = useState(false)  
  const [peerOpen, setPeerOpen] = useState(false)  
  const [articleOpen, setArticleOpen] = useState(false)  
  const [isAbout, setIsAbout] = useState(true)

  const books = publications.filter(publication => publication.type === "book");
  const peerArticles = publications.filter(publication => publication.type !== "book" && publication.peer === true);
  const otherArticles = publications.filter(publication => publication.type !== "book" && publication.peer === false);

  return (
    <section className='content-page'>

      <div className={`personal-information ${isAbout? '' : 'personal-close'}`} >

        <div className='personal-header' onClick={ () => {setIsAbout(prev => !prev)}}>
          <h1>About</h1>
          <img src={arrow} className={isAbout? 'rotate-arrow': ''} style={{transition:"1s"}}/>
          <Link to="/cv/academia" className="link-cv-academia">     
            <img src={cvImage} className='cv-academia' style={{height:"35px", width: "auto", marginTop:"15px"}} />
          </Link>
        </div>
        
        <h5>I´m a sociologist and philosopher based in Berlin. I have published peer-reviewed articles and political analysis in various journals. I have conducted research on social movements.
            I´m an author of a book.
            In my PhD I focused on the study of the financial system and the money creation process.
        </h5>

        <h4>Education</h4>
        <h6 className='studies'>2021. Ph.D. in Sociology. Autonomous University of Puebla. Thesis: <i>Contemporary capitalism and the ontology of finance.</i></h6>
        <h6 className='studies'>2014. MA. Degree in Philosophy. National Autonomous University of Mexico. Thesis: <i>The political philosophy of Gilles Deleuze.</i></h6>

        <h4>Awards and distinctions</h4>
          <h6>Winner of the 2021 CASP Essay Prize, for the article “From Commodities to Assets”. Review of Capital as Power. York University. Toronto.</h6>
          <h6>Honorable Mention, XV National Award of Political Essay “Guillermo Rousset Banda”, to the book El País del Dolor. Historia del Movimiento por la paz con Justicia y Dignidad.  Mexico, 2018.</h6>
          <h6>Graduated with Honors. MA in Philosophy, with the thesis “The Political Philosophy of Gilles Deleuze”. National Autonomous University of Mexico, 2014.</h6>
     
      </div>

      <div className='publications-list'>
        <h1>Publications</h1>
       
        <div className='list-type-box' onClick={() => setBookOpen(prev => !prev)}>
          <h2>Books</h2>
          <img src={arrow} className={bookOpen? "rotate-arrow": ""} style={{transition:"1s"}}/>
        </div>
        {bookOpen && <ul>{books.map((item, index) => renderItem({ item, index }))}</ul> }


        <div className='list-type-box' onClick={() => setPeerOpen(prev => !prev)}>
          <h2>Peer-reviewed articles</h2>
          <img src={arrow} className={peerOpen? "rotate-arrow": "" } style={{transition:"1s"}}/>
        </div>
        {peerOpen && <ul>{peerArticles.map((item, index) => renderItem({ item, index }))}</ul> }

        <div className='list-type-box' onClick={() => setArticleOpen(prev => !prev)}>
          <h2>Other articles</h2>
          <img src={arrow} className={articleOpen? "rotate-arrow": ""} style={{transition:"1s"}}/>
        </div>
        {articleOpen && <ul>{otherArticles.map((item, index) => renderItem({ item, index }))}</ul>}

      </div>
    </section>
  );
}
