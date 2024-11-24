import React, { useState, useEffect } from 'react';
import './Countdown.css';

function Countdown() {
  const calculateTimeLeft = () => {
    const eventDate = new Date('December 25, 2024 00:00:00');
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <h2>Countdown to Christmas 🎅</h2>
      <div>
        {Object.keys(timeLeft).length > 0 ? (
          <div>
            <p>{timeLeft.days} Days</p>
            <p>{timeLeft.hours} Hours</p>
            <p>{timeLeft.minutes} Minutes</p>
            <p>{timeLeft.seconds} Seconds</p>
          </div>
        ) : (
          <p>🎉 It's Christmas! 🎄</p>
        )}
      </div>
    </div>
  );
}

export default Countdown;
