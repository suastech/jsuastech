import { useState } from "react"
import menu from '../assets/images/plus.png'
import close from '../assets/images/closebutton3.png'
import github from '../assets/images/github2.png'
import twitter from '../assets/images/twitter2.png'
import linkedin from '../assets/images/linkedin.png'
import email from '../assets/images/email.png'


export default function SideMenu() {
  const [isSideBar, setIsSideBar] = useState(false)
  return ( 
    <div onMouseEnter={() => setIsSideBar(true)} onMouseLeave={() => setIsSideBar(false)} className={`side-bar ${isSideBar? "side-open": "side-close" }`}>
          {!isSideBar?
            <img src={menu} onClick={() => setIsSideBar(true)}/>
          :
            <>
              <img src={close} alt="close" onClick={() => setIsSideBar(false)}/>
              <img src={github} alt="github" onClick={() => window.open('https://github.com/suastech', '_blank')}/>
              <img src={linkedin} alt="linkedin" onClick={() => window.open('https://www.linkedin.com/in/suastech/', '_blank')}/>
              <img src={twitter} alt="x" onClick={() => window.open('https://x.com/suaste86', '_blank')}/>
              <img src={email} alt="email" onClick={() => {window.location.href = 'mailto:jsuaste86@gmail.com';}}/>
            </>
          }
      </div>

  )
}