import React from 'react';

const LeaderBoard = (props) => {
  const sortedArrays = [...props.players].sort((a, b) => {
    if (a.score == b.score) return a.responseTime - b.responseTime;
    return b.score - a.score;
  });

  return (
    <>
      {sortedArrays.map((player) => (
        <p key={player.id}>
          {player.name} - {player.score} - {player.responseTime}
        </p>
      ))}
    </>
  );
};

export default LeaderBoard;
