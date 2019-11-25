import GameLayout from 'components/GameLayout/GameLayout';
import Loader from 'components/Loader/Loader';
import React from 'react';

import styles from './Game.module.scss';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <GameLayout>
        {this.state.isLoading ? (
          <>
            <p className={styles.waiting}>En attente de la question...</p>
            <Loader />
          </>
        ) : (
          <p>Question</p>
        )}
      </GameLayout>
    );
  }
}

export default Game;
