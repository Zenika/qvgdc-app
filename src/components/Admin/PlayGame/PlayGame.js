import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { useParams } from 'react-router-dom';

import { GAMEDETAIL_QUERY } from './PlayGame.action';

const PlayGame = () => {
  let { gameId } = useParams();
  const { loading, error, data } = useQuery(GAMEDETAIL_QUERY, {
    variables: {
      gameId,
    },
  });

  if (loading) return <div>Chargement de la partie...</div>;
  if (error) return <div>Problème lors du chargement de la partie</div>;

  return (
    <>
      <p>bonjour</p>
    </>
  );
};

export default PlayGame;
