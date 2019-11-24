import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import React from 'react';

import styles from './Question.module.scss';

function Question() {
  return (
    <div className={styles.question}>
      <Header />
      <div className={styles.main}>
        <div className="u-wrapper">
          <p className={styles.waiting}>En attente de la question...</p>
          <Loader />
        </div>
      </div>
    </div>
  );
}

export default Question;
