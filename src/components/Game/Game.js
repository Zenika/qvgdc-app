import { useQuery, useSubscription } from '@apollo/react-hooks';
import GameLayout from 'components/GameLayout/GameLayout';
import LeaderBoard from 'components/LeaderBoard/LeaderBoard';
import Loader from 'components/Loader/Loader';
import Question from 'components/Question/Question';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { playerContext } from 'store';

import { GAMEDETAIL_QUERY, GAMEDETAIL_SUBSCRIPTION, PLAYER_QUERY, PLAYER_SUBSCRIPTION } from './Game.actions';
import styles from './Game.module.scss';

export const Game = () => {
  const [player, dispatch] = useContext(playerContext);

  let { gameId } = useParams();
  const { loading, error, data } = useQuery(GAMEDETAIL_QUERY, {
    variables: {
      gameId,
    },
  });

  const { loadingPlayer, errorPlayer, dataPlayer, refetchPlayer } = useQuery(PLAYER_QUERY, {
    variables: {
      playerId: player.id,
    },
    onCompleted(_) {
      localStorage.setItem('player', JSON.stringify(_.player));

      dispatch({
        type: 'UPDATE',
        payload: { ..._.player },
      });
    },
  });

  const { loading: subscriptionLoading, data: data$ } = useSubscription(GAMEDETAIL_SUBSCRIPTION, {
    variables: {
      gameId,
    },
  });

  const { data: dataPlayer$ } = useSubscription(PLAYER_SUBSCRIPTION, {
    variables: {
      playerId: player.id,
    },
  });

  if (loading) return <div>Chargement de la partie...</div>;
  if (error) return <div>Problème lors du chargement de la partie</div>;

  const currentGame = data$ ? data$.updatedGame : data.game;

  if (currentGame.finish)
    return (
      <GameLayout player={dataPlayer$ && dataPlayer$.updatedPlayer ? dataPlayer$.updatedPlayer : player} game={currentGame}>
        <div className="text-center">Partie terminée</div>
        <LeaderBoard players={currentGame.players} />
      </GameLayout>
    );

  const currentQuestion = currentGame.currentQuestion;

  return (
    <GameLayout player={player} game={currentGame}>
      {!currentQuestion ? (
        <>
          <p className={styles.waiting}>En attente de la question...</p>
          <Loader />
        </>
      ) : (
        <Question question={currentQuestion} />
      )}
    </GameLayout>
  );
};

export default Game;
