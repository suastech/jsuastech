import articles from '../assets/publications-list.json'
import { renderItem } from './Academia'

export default function Articles () {
  const sortedArt = articles.filter(element => element.selected === true).sort( (a,b) => {  
    return new Date(b.date.replace(/\//g, '-')) - new Date(a.date.replace(/\//g, '-') )
  })

  
  return (
    <section className='content-page'>
     <h2 id='escritos-header'>Escritos / Writings</h2> 
      <ul className='writings-list'>
        {sortedArt.map((item, index) => renderItem({ item, index }) )}
      </ul>
    </section>
  )
}