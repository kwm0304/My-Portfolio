import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import weatherApp from '../../../assets/weather.png'
import quiz from '../../../assets/quiz.png'
import work from '../../../assets/scheduler.png'

function Project() {
    return(
        <div className="cards">

  <div className="card">
    <div className="card__image-holder">
    <h2>Weather App</h2>
      <a href="https://kwm0304.github.io/Weather-App/"><img className="card__image my-2" src={weatherApp} style={{width: "33%"}}alt="weather-app-screenshot" /></a>
    </div>
    <div className="card-title">
      <a href="#" className="toggle-info btn"></a>
    </div>
    <div className="card-flap flap1">
      <div className="card-description">
        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
      <div className="card-flap flap2">
        <div className="card-actions">
          <a href="#" className="btn">Read more</a>
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card__image-holder">
    <h2>Coding Quiz</h2>
      <a href="https://kwm0304.github.io/Coding-quiz-app/"><img className="card__image" src={quiz} style={{width: "20%"}} alt="beach" /></a>
    </div>
    <div className="card-title">
      <a href="#" className="toggle-info btn">
        <span className="left"></span>
        <span className="right"></span>
      </a>
    </div>
    <div className="card-flap flap1">
      <div className="card-description">
        This simple quiz game was made with vanilla javascript.
      </div>
      <div className="card-flap flap2">
        <div className="card-actions">
          <a href="#" className="btn">Read more</a>
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card__image-holder">
    <h2>Work Day Scheduler</h2>
      <a href="https://kwm0304.github.io/Day-Scheduler/"><img className="card__image" src={work} style={{width:"20%"}} alt="mountain" /></a>
    </div>
    <div className="card-title">
      <a href="#" className="toggle-info btn">
        <span className="left"></span>
        <span className="right"></span>
      </a>
    </div>
    <div className="card-flap flap1">
      <div className="card-description">
        This was made using moment.js and jquery.
      </div>
      <div className="card-flap flap2">
        <div className="card-actions">
          <a href="#" className="btn">Read more</a>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}




export default Project;