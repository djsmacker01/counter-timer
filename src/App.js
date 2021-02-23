import React,{useRef,useEffect,useState} from 'react'

import './App.css';

const App = () => {

  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  let interval = useRef(); 

  // Create a function called startTimer, 
  // This will start or called our timer
  const startTimer = () => {
    const countDownDate = new Date('Jan 29,2021 00:00:00').getTime();

    interval = setInterval(() => {
      const presentDate = new Date().getTime;
      const distance = countDownDate - presentDate;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (100 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // to display or check the timer
      if (distance < 0) {
        // stop the timer
        clearInterval(interval.current)
      } else {
        // to update our timer
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds)
      }

    }, 1000);
  };
  
  // componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

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
                <p>{days}</p>
                <p><small>Days</small></p>
              </section>
              <span>:</span>
                <section>
                <p>{hours}</p>
                <p><small>Hours</small></p>
              </section>
              <span>:</span>
                <section>
                <p>{ minutes}</p>
                <p><small>Minutes</small></p>
              </section>
              <span>:</span>
                <section>
                <p>{seconds}</p>
                <p><small>Seconds</small></p>
              </section>
            </div>
          </section>
              
          
        </section>
        
      )
    }

export default App;