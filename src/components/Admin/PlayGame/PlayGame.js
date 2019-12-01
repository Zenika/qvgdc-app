import { useMutation, useQuery, useSubscription } from '@apollo/react-hooks';
import { Button } from '@material-ui/core';
import Counter from 'components/Counter/Counter';
import React, { useState } from 'react';
import { Check, X } from 'react-feather';
import { useParams } from 'react-router-dom';

import { GAMEDETAIL_QUERY, GAMEDETAIL_SUBSCRIPTION, UPDATE_GAME } from './PlayGame.action';
import styles from './PlayGame.module.scss';

const PlayGame = () => {
  const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0);
  const [isQuestionFinished, setIsQuestionFinished] = useState(false);
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

  const [updateGameMutation, { loading: updatingGame }] = useMutation(UPDATE_GAME);

  if (loading) return <div>Chargement de la partie...</div>;
  if (error) return <div>Problème lors du chargement de la partie</div>;

  const currentGame = data$ ? data$.updatedGame : data.game;
  const currentQuestion = currentGame.questions[currentGame.state !== null ? currentGame.state : 0];

  const launchQuestion = (questionId, order) => {
    setCurrentIndexQuestion(order);
    updateGameMutation({ variables: { gameId, data: { open: true, currentQuestion: questionId, state: order } } });
  };

  const endingQuestion = currentQuestion.launched ? new Date(currentQuestion.launched).getTime() + currentQuestion.duration * 1000 : null;

  return (
    <>
      <h2>{currentGame.title}</h2>
      <p>
        Question n°{currentIndexQuestion + 1} / {currentGame.questions.length}
      </p>
      <h3>{currentQuestion.title}</h3>
      <p>Choix possibles :</p>
      {currentQuestion.choices.map((choice) => {
        let isGoodChoice = choice.id === currentQuestion.goodChoice.id;
        return (
          <p key={choice.id} className={isGoodChoice ? styles.goodChoice : styles.badChoice}>
            {isGoodChoice ? <Check size="16" /> : <X size="16" />}
            {choice.title}
          </p>
        );
      })}
      {currentQuestion.launched ? (
        <>
          {endingQuestion < Date.now() || isQuestionFinished ? (
            <p>Question terminée!</p>
          ) : (
            <Counter endAt={endingQuestion} onComplete={() => setIsQuestionFinished(true)} />
          )}
        </>
      ) : (
        <Button variant="contained" color="primary" onClick={() => launchQuestion(currentQuestion.id, currentQuestion.order)}>
          Lancer la question
        </Button>
      )}
    </>
  );
};

export default PlayGame;
