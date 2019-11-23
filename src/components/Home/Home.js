import Button from '@material-ui/core/Button';
import GameList from 'components/GameList/GameList';
import Logo from 'components/Logo/Logo';
import React from 'react';

import styles from './Home.module.scss';

function Home() {
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
        <GameList />

        <Button variant="contained" color="primary">
          Voir la partie
        </Button>
      </div>
    </div>
  );
}

export default Home;
