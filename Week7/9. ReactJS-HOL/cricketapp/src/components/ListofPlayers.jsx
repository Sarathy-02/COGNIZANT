import React from 'react';

const ListofPlayers = ({ players }) => {
  return (
    <div>
      {players.map((player, index) => (
        <p key={index}>
          {player.name} {player.score}
        </p>
      ))}
    </div>
  );
};

export default ListofPlayers;
