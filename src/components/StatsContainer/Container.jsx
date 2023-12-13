import React from 'react';
import './Container.css';
import './Match.css';
import Schedule from './MatchStatistics/Schedule';

function App() {
  return (
    <div className="container">
      <div className="scrollable-box">
        <Schedule /> {Schedule}
      </div>
    </div>
  );
}

export default App;
