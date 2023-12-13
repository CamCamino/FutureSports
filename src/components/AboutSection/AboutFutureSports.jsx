import React, { useEffect, useRef } from "react";
import "./AboutFutureSports.css";

function AboutFutureSports() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      const rect = aboutRef.current.getBoundingClientRect();
      if (rect.top < 300) {
        aboutRef.current.classList.add('dissolve');
      } else {
        aboutRef.current.classList.remove('dissolve');
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="about-box">
      <div ref={aboutRef} className="centered-text">
        <span className='serif-font'>Welcome to FutureSports,</span> the digital heartbeat of the sporting world. Here, we're revolutionizing how players, fans, coaches, and sponsors interact and connect. Our web app isn't just a tool; it's a vibrant community hub, pulsing with the energy of sports. We're transforming the way sports lovers engage with each other, integrating every aspect of the game into an immersive, user-friendly experience. Join us in celebrating the spirit of sports, where every click brings you closer to the roar of the stadium and the <span className='serif-font'>thrill of the game.</span>
      </div>
    </div>
  );
}

export default AboutFutureSports;