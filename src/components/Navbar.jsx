import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {

  return (
    <nav className='box-background'>
      
      <div className='item-navbar'>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >Coding</NavLink>
      </div>
      <div className='item-navbar'>
        <NavLink to="/academia" className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
        Academia</NavLink>
      </div>
      <div className='item-navbar'>
     
      </div>
 
    </nav>
  )
}