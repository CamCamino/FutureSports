import React, { useRef, useEffect, useState } from 'react';
import './HeroText.css';

function HeroText() {
  const textRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newZoomLevel = 1 + scrollY / 50;
      const newOpacity = 1 - scrollY / 200;
      setZoomLevel(newZoomLevel);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.transform = `scale(${zoomLevel})`;
      textRef.current.style.opacity = opacity;
    }
  }, [zoomLevel, opacity]);

  return (
    <header className="hero-text" ref={textRef} style={{ position: 'fixed', top: -320, left: 0, right: 0 }}>
      <span className='hero-serif-font'>FUTURE</span>SPORTS
    </header>
  );
}

export default HeroText;

