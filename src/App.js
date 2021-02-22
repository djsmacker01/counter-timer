import React from 'react'

import './App.css';

const App = () => {
  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calendar timer-icon">
            <h2>Countdown timer</h2>
            <p>Count down your React js Journey</p>
          </span>
        </div>
        <div>
          <section>
            <p>87</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>
            <section>
            <p>87</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>
            <section>
            <p>87</p>
            <p><small>Minutes</small></p>
          </section>
          <span>:</span>
            <section>
            <p>87</p>
            <p><small>Seconds</small></p>
          </section>
        </div>
      </section>
           
      
    </section>
    
  )
}

export default App;