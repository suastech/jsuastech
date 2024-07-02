import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import picture from '../assets/images/picture.jpg'

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
      <NavLink to="/cv" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        CV
      </NavLink>
      </div>
{/*       <img id="profile-picture-navbar" src={picture} alt='picture' style={{marginLeft:"auto", marginRight:"20px"}}/>
 */}   
    </nav>
  )
}