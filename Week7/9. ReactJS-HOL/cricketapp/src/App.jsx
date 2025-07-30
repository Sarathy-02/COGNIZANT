import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import ScoreBelow70 from './components/ScoreBelow70';

const App = () => {
  const flag = true; // Change this to false to see the other output

  const players = [
    { name: 'Mr. Jack', score: 50 },
    { name: 'Mr. Michael', score: 70 },
    { name: 'Mr. John', score: 40 },
    { name: 'Mr. Ann', score: 61 },
    { name: 'Mr. Elisabeth', score: 61 },
    { name: 'Mr. Sachin', score: 95 },
    { name: 'Mr. Dhoni', score: 100 },
    { name: 'Mr. Virat', score: 84 },
    { name: 'Mr. Jadeja', score: 64 },
    { name: 'Mr. Raina', score: 75 },
    { name: 'Mr. Rohit', score: 80 }
  ];

  const T20players = [
    "Mr. First Player",
    "Mr. Second Player",
    "Mr. Third Player"
  ];

  const RanjiPlayers = [
    "Mr. Fourth Player",
    "Mr. Fifth Player",
    "Mr. Sixth Player"
  ];

  const mergedPlayers = [...T20players, ...RanjiPlayers];

  const oddPlayers = ['Sachin', 'Virat', 'Yuvaraj'];
  const evenPlayers = ['Dhoni', 'Rohit', 'Raina'];

  if (flag) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <ScoreBelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>Indian Team</h1>
          <h2>Odd Players</h2>
          {oddPlayers.map((name, index) => (
            <p key={index}>
              {index === 0 && `First: ${name}1`}
              {index === 1 && `Third: ${name}3`}
              {index === 2 && `Fifth: ${name}`}
            </p>
          ))}
          <hr />
          <h2>Even Players</h2>
          {evenPlayers.map((name, index) => (
            <p key={index}>
              {index === 0 && `Second: ${name}2`}
              {index === 1 && `Fourth: ${name}4`}
              {index === 2 && `Sixth: ${name}`}
            </p>
          ))}
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          {mergedPlayers.map((player, idx) => (
            <p key={idx}>{player}</p>
          ))}
        </div>
      </div>
    );
  }
};

export default App;
