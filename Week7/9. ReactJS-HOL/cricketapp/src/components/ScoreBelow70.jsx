import React from 'react';

const ScoreBelow70 = ({ players }) => {
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      {filteredPlayers.map((player, index) => (
        <p key={index}>
          {player.name} {player.score}
        </p>
      ))}
    </div>
  );
};

export default ScoreBelow70;
