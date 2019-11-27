import { ReactComponent as GiftIcon } from 'assets/icons/gift.svg';
import React from 'react';

import styles from './GameDetail.module.scss';

const GameDetail = (props) => {
  return (
    <>
      <h2 className={`h3 ${styles.title}`} style={{ color: 'inherit' }}>
        <GiftIcon />
        {props.game.title}
      </h2>
      <p className={styles.description}>
        {props.game.players && props.game.players.length ? `${props.game.players.length} joueurs` : 'Aucun joueur'}
      </p>
    </>
  );
};

export default GameDetail;
