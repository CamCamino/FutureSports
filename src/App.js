import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import HeroText from './components/HeroBanner/HeroBannerText/HeroText';
import LiveClock from './components/HeroBanner/HeroClock/HeroClock';
import AboutFutureSports from './components/AboutSection/AboutFutureSports';
import Schedule from './components/StatsContainer/MatchStatistics/Schedule';
import MediaSection from './components/MediaSection/MediaSection';
import SignUp from './components/SignupSection/SignUp';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <Navbar />
        <HeroBanner />
         <div className="clock-container">
           <HeroText />
           <LiveClock />
         </div>
      <AboutFutureSports />
         <div className="container">
           <Schedule />
         </div>
      <MediaSection />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
