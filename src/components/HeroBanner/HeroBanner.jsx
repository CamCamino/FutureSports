import React, { useRef, useEffect, useState } from 'react';
import './HeroBanner.css';


function HeroBanner() {
  const textRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newZoomLevel = 1 + scrollY / 500;
      setZoomLevel(newZoomLevel);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.transform = `scale(${zoomLevel})`;
    }
  }, [zoomLevel]);

  return (
    <header className="hero-banner">
    </header>
  );
}

export default HeroBanner;
