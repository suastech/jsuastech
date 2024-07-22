import '../styles/WelcomeCard.css'
import me from '../assets/images/me.jpg'

export default function WelcomeCard() {

  function handleShift(dir) {
    console.log("!!")
    if (dir === "left") {
      document.getElementById("welcome-card").classList.add("move-left")
    } else {
      document.getElementById("welcome-card").classList.add("move-right")
    }
  }

  return (
      <div id='welcome-card'>
        <iframe src="https://giphy.com/embed/KanCFLCba1f5UAqAxX" className="stickman-left"></iframe>
          <img src={me}/>
        <div className='welcome-info'>
          <p>Welcome!</p>
          <p>I am a web developer and sociologist based in Berlin. </p>
          <p>Here you will find information about the programming projects I have developed and my academic work.</p>
          <button onClick={() => handleShift("left")}>Coding</button>
          <button onClick={() => handleShift("right")}>Academia</button>
        </div>

      </div>
  )
}