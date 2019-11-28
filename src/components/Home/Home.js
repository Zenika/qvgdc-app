import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GameDetail from 'components/GameDetail/GameDetail';
import GameList from 'components/GameList/GameList';
import Logo from 'components/Logo/Logo';
import React, { useState } from 'react';
import { ArrowLeft } from 'react-feather';

import styles from './Home.module.scss';

function Home() {
  const [game, setGame] = useState(null);
  const [gameDetail, setGameDetail] = useState(false);

  return (
    <div className={`u-wrapper ${styles.home}`}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <h1 className={styles.h1}>
          Bienvenue <span>dans</span>
          <strong>Qui veut gagner des canards</strong>
        </h1>
      </div>
      <div className={styles.right}>
        {gameDetail ? (
          <div className={styles.register}>
            <p className={styles.backToGames} onClick={() => setGameDetail(false)}>
              <ArrowLeft />
              Retour aux parties
            </p>

            <GameDetail game={game} />

            <TextField type="text" required label="Nom de joueur" margin="normal" variant="outlined" />
            <br />
            <Button variant="contained" color="primary">
              Rejoindre la partie
            </Button>
          </div>
        ) : (
          <>
            <GameList onChange={setGame} value={game ? game.id : null} />

            <Button onClick={() => setGameDetail(true)} disabled={game === null} variant="contained" color="primary">
              Voir la partie
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
