import React, { useState } from 'react';
import './Match.css';

const Schedule = () => {
  const [matches] = useState([
    {
      id: 1,
      date: 'Sat Mar 26 2024',
      time: '07:30',
      'pm/am': 'PM',
      home_team: 'Melbourne Demons',
      away_team: 'Freemantle Dockers',
      venue: 'Melbourne Cricket Ground, Melbourne',
    },
  ]);

  return (
    <div className="schedule">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.id}>
              <td>{match.date}</td>
              <td>{`${match.time} ${match['pm/am']}`}</td>
              <td>{match.home_team}</td>
              <td>{match.away_team}</td>
              <td>{match.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
