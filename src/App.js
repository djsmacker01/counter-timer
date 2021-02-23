import React,{useState} from 'react'

import './App.css';

const App = () => {

  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
      return (
        <section className="timer-container">
          <section className="timer">
            <div>
              <span className="mdi mdi-calendar timer-icon"></span>
              <h2>Countdown timer</h2>
              <p>Count down your React js Journey</p>
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