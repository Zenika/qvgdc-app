import { useQuery, useSubscription } from '@apollo/react-hooks';
import Counter from 'components/Counter/Counter';
import GameLayout from 'components/GameLayout/GameLayout';
import Loader from 'components/Loader/Loader';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { playerContext } from 'store';

import { GAMEDETAIL_QUERY, GAMEDETAIL_SUBSCRIPTION } from './Game.actions';
import styles from './Game.module.scss';

export const Game = () => {
  const [isQuestionFinished, setIsQuestionFinished] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [player] = useContext(playerContext);

  let { gameId } = useParams();
  const { loading, error, data } = useQuery(GAMEDETAIL_QUERY, {
    variables: {
      gameId,
    },
  });

  const { loading: subscriptionLoading, data: data$ } = useSubscription(GAMEDETAIL_SUBSCRIPTION, {
    variables: {
      gameId,
    },
  });

  if (loading) return <div>Chargement de la partie...</div>;
  if (error) return <div>Problème lors du chargement de la partie</div>;

  const currentGame = data$ ? data$.updatedGame : data.game;
  const currentQuestion = currentGame.currentQuestion;

  const endingQuestion =
    currentQuestion && currentQuestion.launched ? new Date(currentQuestion.launched).getTime() + currentQuestion.duration * 1000 : null;

  return (
    <GameLayout player={player} game={currentGame}>
      {!currentQuestion ? (
        <>
          <p className={styles.waiting}>En attente de la question...</p>
          <Loader />
        </>
      ) : (
        <>
          <p>Question n°{currentQuestion.order}</p>
          <p>{currentQuestion.title}</p>
          <Counter duration={currentQuestion.duration} endAt={endingQuestion} onComplete={() => setIsQuestionFinished(true)} />
        </>
      )}
    </GameLayout>
  );
};

export default Game;
