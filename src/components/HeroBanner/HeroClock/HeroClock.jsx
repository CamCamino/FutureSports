import React, { useState, useEffect, useRef } from "react";
import "./HeroClock.css";

function LiveClock() {
  const [time, setTime] = useState(new Date());
  const clockRef = useRef(null);
  const originalTop = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    originalTop.current = clockRef.current.getBoundingClientRect().top;

    const checkScroll = () => {
      if (window.pageYOffset > originalTop.current) {
        clockRef.current.classList.add('sticky');
      } else {
        clockRef.current.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <header ref={clockRef} className="clock-box">
      <div className="live-clock">{time.toLocaleTimeString()}</div>
    </header>
  );
}

export default LiveClock;